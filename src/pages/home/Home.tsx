import News from "../../components/news/newsSimple";
import NewsHigh from "../../components/news/newsHigh";
import bgEarth from '@/assets/earth.svg';
import leftLine from '@/assets/left-line.png';
import rightLine from '@/assets/right-line.png';
import React, { useEffect, useState } from "react";
import NewsEvent from "../../components/news/newsEvent";
import {usePagesContext} from "../../providers/PagesProvider.tsx";
import {getRbArticles} from "../../api/rb-ru/getArticles.ts";
import {Page} from "../../types/Page.ts";
import {RbArticle} from "../../types/RbArticle.ts";

const Home = ({id}: { id: number }) => {
    const {pages} = usePagesContext();
    const currentPage = pages.find((page: Page) => page.id === id) as Page;

    // const formattedHtml = (htmlToFormat) => {
    //     const html = edjsParser.parse(htmlToFormat);
    //     return {__html: html.join(" ")};
    // }

    const [articles, setArticles] = useState<RbArticle[]>([]);
    // TODO: fix any
    const [post, setPost] = useState<RbArticle | null>(null);
    const [limit, setLimit] = useState<number>(5);

    useEffect(() => {
        getRbArticles({
            limit, tag: 59229
        })
            .then((res) => setArticles(res.articles));
    }, [limit]);

    useEffect(() => {
        getRbArticles({
            limit: 1, tag: 59335
        })
            .then((res) => setPost(res.articles[0]));
    }, []);

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
                articles.map((item: RbArticle, index: number) => (
                    <React.Fragment key={index}>
                        {
                            index % 5 === 0 ?
                                <NewsHigh article={item} /> :
                                <News article={item} />
                        }
                        {(index === 4 && post) && <NewsEvent article={post} />}
                    </React.Fragment>
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