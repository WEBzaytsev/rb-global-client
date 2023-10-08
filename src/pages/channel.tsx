import Layout from "../layout";
import logoChannel from '@/assets/channel/logo-channel.png';
import bgChannel from '@/assets/channel/bg-channel.png';
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import edjsHTML from 'editorjs-html';
import {getPostDataById} from "../utils/getApiUrl.ts";

const edjsParser = edjsHTML();

const ChannelPage = () => {
    const [content, setContent] = useState<any[]>();
    const [title, setTitle] = useState('');
    const [loading, setLoading] = useState(true);
    const ref = useRef();
    const postId = 2;
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
    const formattedHtml = () => { return {__html:  content?.map((item: any) => {return item}).join("")}; };
    return (
        <Layout>
            <div className="content-text">
                <div className="title">{title}</div>
                <div className="paragraph" dangerouslySetInnerHTML={formattedHtml() as unknown as { __html: string }} />
                <a href="#" className="btn">Подключиться!</a>
                <div className="logo-channel">
                    <img src={logoChannel} alt="" />
                </div>
            </div>
            <div className="channel-bg">
                <img src={bgChannel} alt="" />
            </div>
        </Layout>
    )
}

export default ChannelPage;