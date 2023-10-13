import News from "../../components/news/newsSimple";
import NewsHigh from "../../components/news/newsHigh";
import bgEarth from '@/assets/earth.svg';
import leftLine from '@/assets/left-line.png';
import rightLine from '@/assets/right-line.png';
import React, { useEffect, useState } from "react";
import NewsEvent from "../../components/news/newsEvent";
import {usePagesContext} from "../../providers/PagesProvider.tsx";
import {Page} from "../../types/Page.ts";

const username = 'global';
const password = 'reactvue';
const credentials = btoa(`${username}:${password}`);

const Home = ({id}: { id: number }) => {
    const {pages} = usePagesContext();
    const currentPage = pages.find((page: Page) => page.id === id) as Page;
    console.log(currentPage.content)

    const formattedHtml = (htmlToFormat) => {
        const html = edjsParser.parse(htmlToFormat);
        return {__html: html.join(" ")};
    }

    const tag = 59229;
    const api = (import.meta.env.MODE == 'development') ? 'https://dev.rusbase.com' : 'https://rb.ru';

    // TODO: fix any
    const [articles, setArticles] = useState<any>([]);
    // TODO: fix any
    const [listPost, setListPost] = useState<any>([]);
    const [limit, setLimit] = useState<number>(5);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${api}/api/articles?tag=${tag}&limit=${limit}`, {
                method: "GET",
                headers: {
                    "access-control-allow-origin" : "*",
                    "Content-type": "application/json; charset=UTF-8",
                    "Authorization": `Basic ${credentials}`
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
                    "Content-type": "application/json; charset=UTF-8",
                    "Authorization": `Basic ${credentials}`
                }
            });
            const newData = await response.json();
            setListPost(newData.articles);
        };
        fetchData();
    }, [articles]);

    const loadMore = (e: React.MouseEvent) => {
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
            {
                // TODO: fix any
                articles.map((item: any, index: number) => (
                    <>
                        {
                            index % 5 === 0 ?
                                <NewsHigh {...item} key={index} /> :
                                <News {...item} key={index} />
                        }
                        {index === 4 && <NewsEvent {...listPost[0]} />}
                    </>
                ))
            }

            <a
                href="/"
                className="load-more"
                onClick={(e: React.MouseEvent) => loadMore(e)}
            >
                Показать еще
            </a>
        </>
    )
}

export default Home;