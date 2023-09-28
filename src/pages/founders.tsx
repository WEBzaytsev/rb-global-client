import { useEffect, useState } from "react";
import EventBlock from "../components/eventBlock";
import FounderBlock from "../components/founderBlock";
import Layout from "../layout";

const FoundersPage = () => {
    let tag = 59335;

    const [articles, setArticles] = useState<any>([]);
    const [limit, setLimit] = useState<number>(3);
    let api = (import.meta.env.MODE == 'development') ? 'http://localhost:3000' : 'https://rb.ru';

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
        fetchData();
    }, [tag]);

    console.log(articles);

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
                <div className="event-list">
                    <EventBlock />
                    <EventBlock />
                    <EventBlock />
                </div>
                <hr className="line" />
                <a href="#" className="btn-project-founders">Перейти к проекту</a>
            </div>
        </Layout>
    )
}

export default FoundersPage;