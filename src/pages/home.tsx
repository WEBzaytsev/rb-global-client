import News from "../components/news/newsSimple";
import Layout from "../layout";
import NewsHigh from "../components/news/newsHigh";
import bgEarth from '@/assets/earth.svg';
import leftLine from '@/assets/left-line.png';
import rightLine from '@/assets/right-line.png';
import { useEffect, useState } from "react";
import NewsEvent from "../components/news/newsEvent";

const HomePage = () => {
    let tag = 59229;
    const [articles, setArticles] = useState<any>([]);
    const [listPost, setListPost] = useState<any>([]);
    const [limit, setLimit] = useState<number>(5);

    let api = (import.meta.env.MODE == 'development') ? 'https://dev.rusbase.com' : 'https://rb.ru';
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
    }, [tag, limit]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${api}/api/articles?tag=59335&limit=1`, {
                method: "GET",
                headers: {
                    "access-control-allow-origin" : "*",
                    "Content-type": "application/json; charset=UTF-8"
                }
            });
            const newData = await response.json();
            setListPost(newData.articles);
        };
        fetchData();
    }, [articles]);

    const loadMore = (e: any) => {
        e.preventDefault();
        setLimit(limit + 5);
    }


    return (
        <>
            <div className="bg-earth">
                <img src={bgEarth} alt="" />
            </div>
            <div className="left-line">
                <img src={leftLine} alt="" />
            </div>
            <div className="right-line">
                <img src={rightLine} alt="" />
            </div>
            <Layout>
                {
                    articles.map((item: any, index: number) => (
                        <>
                            {(index%5 === 0) ? <NewsHigh {...item} key={index} /> : <News {...item} key={index} />}
                            {index === 4 && <NewsEvent {...listPost[0]} />}
                        </>
                    ))
                    
                }
                <a href="/" className="load-more" onClick={(e) => loadMore(e)}>Показать еще</a>
            </Layout>
        </>
    )
}

export default HomePage;