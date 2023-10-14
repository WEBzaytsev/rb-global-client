import TagsBlock from "../../components/tags";
import edjsHTML from 'editorjs-html';
import {usePagesContext} from "../../providers/PagesProvider.tsx";
/** Assets */
import hashtagSubs from '@/assets/hashtag.svg';
/** Types */
import {Page} from "../../types/Page.ts";
import {BlockTypes} from "../../types/BlockTypes.ts";

const edjsParser = edjsHTML();

const Subscribe = ({id}: { id: number }) => {
    const {pages} = usePagesContext();
    const currentPage = pages.find((page: Page) => page.id === id) as Page;
    console.log(currentPage.content)

    // todo: fix types
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
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
                <TagsBlock/>
            </div>
            <div className="hashtag">
                <img src={hashtagSubs} alt=""/>
            </div>
        </>
    )
}

export default Subscribe;