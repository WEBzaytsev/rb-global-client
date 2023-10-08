import Layout from "../layout";
import recolationBg from '@/assets/relocationMap.png';
import lineGray from '@/assets/relocation-line-gray.png';
import lineGold from '@/assets/relocation-line-gold.png';
import { useState, useLayoutEffect } from "react";
import edjsHTML from 'editorjs-html';

const edjsParser = edjsHTML();

const RelocationMapPage = () => {
    const [content, setContent] = useState<any[]>();
    const [title, setTitle] = useState('');
    const [loading, setLoading] = useState(true);
    const postId = 5;
    useLayoutEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:3000/api/v1/posts/${postId}`, {
                method: "GET",
                headers: {
                    "access-control-allow-origin" : "*",
                    "Content-type": "application/json; charset=UTF-8"
                }
            });
            const newData = await response.json();
            setTitle(newData.title);
            const html = edjsParser.parse(newData.content);
            setContent(html);
            setLoading(false);
        };
        fetchData();
    }, [])

    if(loading) {
        return (
            <Layout>
                Загрузка...
            </Layout>
        )
    }
    const formattedHtml = () => { return {__html: content?.map((item: any) => {return item}).join(" ")}; };
    return (
        <Layout>
            <div className="content-text content--relocation">
                <div className="title">{title}</div>
                <div className="relocatin-block-text">
                    <div className="description"  dangerouslySetInnerHTML={formattedHtml() as unknown as { __html: string }}>
                    </div>
                    <a href="#" className="btn">Перейти к проекту</a>
                    <div className="relocation-block-img">
                        <div className="relocation-line relocation-line--gray">
                            <img src={lineGray} alt="" />
                        </div>
                        <img src={recolationBg} alt="" />
                        <div className="relocation-line relocation-line--gold">
                            <img src={lineGold} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default RelocationMapPage;