import {useEffect, useState} from "react";
import EventBlock from "../../components/eventBlock";
import FounderBlock from "../../components/founderBlock";
import {getArticles} from "../../api/rb-ru/getArticles.ts";
/** Types */
import {RbEvent} from "../../types/RbEvent.ts";
import {usePagesContext} from "../../providers/PagesProvider.tsx";
import {Page} from "../../types/Page.ts";

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
    // TODO: fix any
    const [articles, setArticles] = useState<any[]>([]);
    const [events, setEvents] = useState<RbEvent[]>([]);

    const fetchArticles = async (): Promise<boolean> => {
        const rbArticles = await getArticles(59335, 3);

        // todo: fix types
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (!rbArticles.articles || !rbArticles.articles.length) return false;
        // todo: fix types
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setArticles(rbArticles.articles);
        return true;
    };

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
        // todo: fix types
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
        fetchArticles().then((res: Response): void => {
            if (res) setLoadingArticles(false);
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
                        // TODO: fix any
                        articles.map((item: any, key: number) => (
                            <FounderBlock {...item} key={key}/>
                        ))
                }
            </div>

            {
                loadingEvents ?
                    <p>Загрузка встречь...</p> :
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
                        ) : <p>На ближайшее время встречь не запланированно</p>}
                    </>
            }

            <hr className="line"/>
            <a href="#" className="btn-project-founders">Перейти к проекту</a>
        </div>
    )
}

export default Founders;