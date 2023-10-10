import { useEffect, useState } from "react";
import EventBlock from "../components/eventBlock";
import FounderBlock from "../components/founderBlock";
import Layout from "../layout";
import {RbEvent} from "../types";

const host = import.meta.env.VITE_HOST;
const protocol = import.meta.env.VITE_PROTOCOL;
const path = 'api/v1';

const FoundersPage = () => {
    let tag = 59335;

    const [articles, setArticles] = useState<any>([]);
    const [events, setEvents] = useState<RbEvent[]>([]);
    const [limit, setLimit] = useState<number>(3);
    let api = (import.meta.env.MODE == 'development') ? 'http://localhost:3001' : 'https://rb.ru';

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${api}/api/articles?tag=${tag}&limit=${limit}`, {
                method: "GET",
                headers: {
                    "access-control-allow-origin" : "*",
                    "Content-type": "application/json; charset=UTF-8"
                }
            });
            const newData = await response.json();
            setArticles(newData.articles);
        };

        const fenchEvents = async () => {
            const url = `${host}:${protocol}/${path}/events`;
            await fetch(url, {
                method: "GET",
                headers: {
                    "content-type": "application/json"
                }
            })
                .then(res => res.json())
                .then(data => setEvents(data));
        }

        fenchEvents();
        fetchData();
    }, [tag]);

    return (
        <Layout>
            <div className="content-text content--founders">
                <div className="title">Founders Mondays</div>
                <div className="founders-list">
                    {articles.map((item: any, key: number) => (
                        <FounderBlock {...item} key={key} />
                    ))}
                    
                </div>
                <div className="title title--next">Следующие встречи</div>
                {events.length && (
                    <div className="event-list">
                        {events
                            .filter((event: RbEvent) => event.isShow)
                            .sort((a: RbEvent, b: RbEvent) => new Date(a.date).getTime() - new Date(b.date).getTime())
                            .map((event: RbEvent) => (
                            <EventBlock key={event.id} event={event} />
                        ))}
                    </div>
                )}
                <hr className="line" />
                <a href="#" className="btn-project-founders">Перейти к проекту</a>
            </div>
        </Layout>
    )
}

export default FoundersPage;