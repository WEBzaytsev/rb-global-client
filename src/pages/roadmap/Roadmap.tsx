import edjsHTML from 'editorjs-html';
import {usePagesContext} from "../../providers/PagesProvider.tsx";
/** Assets */
import roadMap from '@/assets/roadmap.png';
/** Types */
import {BlockTypes} from "../../types/BlockTypes.ts";
import {Page} from "../../types/Page.ts";

const edjsParser = edjsHTML();

const Roadmap = ({id}: { id: number }) => {
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
                <div className="paragraph">
                    <a href="#" className="btn">Перейти к проекту</a>
                </div>
            </div>
            <div className="roadmap-bg">
                <img src={roadMap} alt=""/>
            </div>
        </>
    )
}

export default Roadmap;