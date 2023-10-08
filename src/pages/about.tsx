import Layout from "../layout";
import { useState, useLayoutEffect } from "react";
import edjsHTML from 'editorjs-html';

const edjsParser = edjsHTML();

const AboutPage = () => {
    const [content, setContent] = useState<any[]>();
    const [title, setTitle] = useState('');
    const [loading, setLoading] = useState(true);
    const postId = 6;
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
            <div className="content-text">
                <div className="title">{title}</div>
                <div className="paragraph"  dangerouslySetInnerHTML={formattedHtml() as unknown as { __html: string }} />
            </div>
        </Layout>
    )
}

export default AboutPage;