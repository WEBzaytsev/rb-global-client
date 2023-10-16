import {usePagesContext} from "../../providers/PagesProvider.tsx";
/** Assets */
import roadMap from '@/assets/roadmap.png';
/** Types */
import {BlockTypes} from "../../types/BlockTypes.ts";
import {Page} from "../../types/Page.ts";

const Roadmap = ({id}: { id: number }) => {
    const {pages} = usePagesContext();
    const currentPage = pages.find((page: Page) => page.id === id) as Page;

    return (
        <>
            <div className="content-text">
                <div className="title">{currentPage.title}</div>
                {currentPage.content.map((block, idx: number) => (
                    block.blockType === BlockTypes.TEXT_CONTENT && (
                        <div
                            key={idx}
                            className="paragraph"
                            dangerouslySetInnerHTML={{__html: block.html}}
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