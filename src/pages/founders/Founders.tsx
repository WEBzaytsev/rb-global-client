import {useEffect, useState} from "react";
import EventBlock from "../../components/eventBlock";
import FounderBlock from "../../components/founderBlock";
import {usePagesContext} from "../../providers/PagesProvider.tsx";
import {getRbArticles} from "../../api/rb-ru/getArticles.ts";
/** Types */
import {RbEvent} from "../../types/RbEvent.ts";
import {Page} from "../../types/Page.ts";
import {RbArticle} from "../../types/RbArticle.ts";

const Founders = ({id}: { id: number }) => {
    const {pages} = usePagesContext();
    const currentPage = pages.find((page: Page) => page.id === id) as Page;
    console.log(currentPage.content)

    // const formattedHtml = (htmlToFormat) => {
    //     const html = edjsParser.parse(htmlToFormat);
    //     return {__html: html.join(" ")};
    // }

    const [loadingArticles, setLoadingArticles] = useState(true);
    const [loadingEvents, setLoadingEvents] = useState(true);
    const [articles, setArticles] = useState<RbArticle[]>([]);
    const [events, setEvents] = useState<RbEvent[]>([]);

    const fetchEvents = async (): Promise<boolean> => {
        // todo: fix types
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const rbEvents = await getPosts('events');
        if (rbEvents.status === false || rbEvents.code === 404) return false;
        setEvents(rbEvents);
        return true;
    }

    useEffect(() => {
        // todo: fix types
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
        fetchEvents().then((res: Response): void => {
            if (res) setLoadingEvents(false);
        });
        getRbArticles({
            limit: 3, tag: 59335
        })
            .then((res) => {
                setArticles(res.articles);
                setLoadingArticles(false)
            });
    }, []);

    const sortEventsByDate = (a: RbEvent, b: RbEvent): number => new Date(a.date).getTime() - new Date(b.date).getTime();

    return (
        <div className="content-text content--founders">
            <div className="title">Founders Mondays</div>
            <div className="founders-list">
                {
                    loadingArticles ?
                        <p>Загрузка статей...</p> :
                        articles.map((article: RbArticle, key: number) => (
                            <FounderBlock article={article} key={key}/>
                        ))
                }
            </div>

            {
                loadingEvents ?
                    <p>Загрузка встреч...</p> :
                    <>
                        <div className="title title--next">Следующие встречи</div>

                        {events.length ? (
                            <div className="event-list">
                                {events
                                    .filter((event: RbEvent) => event.isShow)
                                    .sort(sortEventsByDate)
                                    .map((event: RbEvent) => (
                                        <EventBlock key={event.id} event={event}/>
                                    ))
                                }
                            </div>
                        ) : <p>На ближайшее время встреч не запланированно</p>}
                    </>
            }

            <hr className="line"/>
            <a href="#" className="btn-project-founders">Перейти к проекту</a>
        </div>
    )
}

export default Founders;