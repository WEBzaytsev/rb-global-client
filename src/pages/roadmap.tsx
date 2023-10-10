import Layout from "../layout";
import roadMap from '@/assets/roadmap.png';
import {useLayoutEffect, useState} from "react";
import edjsHTML from 'editorjs-html';
import {getPostDataById} from "../utils/getApiUrl.ts";
import {PageData} from "../types/PageData.ts";

const edjsParser = edjsHTML();

const RoadMapPage = () => {
    const [content, setContent] = useState<string[]>([]);
    const [title, setTitle] = useState('');
    const [loading, setLoading] = useState(true);
    const postId = 4;

    useLayoutEffect(() => {
        const fetchData = async () => {
            const url = getPostDataById(postId);
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "access-control-allow-origin" : "*",
                    "Content-type": "application/json; charset=UTF-8"
                }
            });
            const newData: PageData = await response.json();
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

    const formattedHtml = { __html: content?.join(" ") }

    return (
        <Layout>
            <div className="content-text">
                <div className="title">{title}</div>
                <div className="paragraph" dangerouslySetInnerHTML={formattedHtml} />
                <div className="paragraph">
                    <a href="#" className="btn">Перейти к проекту</a>
                </div>
            </div>
            <div className="roadmap-bg">
                <img src={roadMap} alt="" />
            </div>
        </Layout>
    )
}

export default RoadMapPage;