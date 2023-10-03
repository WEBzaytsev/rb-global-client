import Layout from "../layout";
import { useState, useLayoutEffect } from "react";
import edjsHTML from 'editorjs-html';

const edjsParser = edjsHTML();

const AboutPage = () => {
    const [content, setContent] = useState<any[]>();
    const [title, setTitle] = useState('');
    const [loading, setLoading] = useState(true);
    const postId = 17;
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
                <div className="description">RB Global — наш новый ресурс для релокантов. Здесь команда RB.RU собрала актуальный контент и активности для читателей, которые находятся в разных странах.</div>
                <div className="paragraph">
                    <p>Вы — важная часть нашего комьюнити предпринимателей. Специально для вас мы проводим встречи Founders' Mondays в новых для нас регионах мира, обновляем Relocation Map с сервисами, которые помогают вести бизнес за рубежом, ведем канал Приехали! и устраиваем прямые эфиры по теме релокации бизнеса.</p>
                    <p>Цель RB.RU — быть не просто информационным проектом о бизнесе, но и сервисом, который помогает сделать реальные и осязаемые вещи. Мы хотим оставаться площадкой для знакомства с единомышленниками, инвесторами и будущими сооснователями компаний. Ресурсом, где можно найти поставщика услуг или, наоборот, клиентов для своего бизнеса. Каналом, которому доверяет экспертное сообщество.</p>
                </div>
            </div>
        </Layout>
    )
}

export default AboutPage;