import {useEffect, useState} from "react";
import edjsHTML from 'editorjs-html';
/** Assets */
import logoChannel from '@/assets/channel/logo-channel.png';
import bgChannel from '@/assets/channel/bg-channel.png';
/** Types */
import {usePagesContext} from "../../providers/PagesProvider.tsx";
import {Page} from "../../types/Page.ts";
import {BlockTypes} from "../../types/BlockTypes.ts";

const edjsParser = edjsHTML();

const Channel = ({id}: { id: number }) => {
    const {pages} = usePagesContext();
    const currentPage = pages.find((page: Page) => page.id === id) as Page;
    console.log(currentPage.content)

    const formattedHtml = (htmlToFormat) => {
        const html = edjsParser.parse(htmlToFormat);
        return {__html: html.join(" ")};
    }

    return (
        <>
            <div className="content-text">
                <div className="title">{currentPage.title}</div>

                {currentPage.content.map((block, idx: number) => (
                    block.blockType === BlockTypes.TEXT_CONTENT && (
                        <div
                            key={idx}
                            className="paragraph"
                            dangerouslySetInnerHTML={formattedHtml(block.html)}
                        />
                    )
                ))}

                <a href="#" className="btn">Подключиться!</a>
                <div className="logo-channel">
                    <img src={logoChannel} alt=""/>
                </div>
            </div>
            <div className="channel-bg">
                <img src={bgChannel} alt=""/>
            </div>
        </>
    )
}

export default Channel;