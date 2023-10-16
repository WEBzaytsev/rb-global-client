import {usePagesContext} from "../../providers/PagesProvider.tsx";
/** Types */
import {Page} from "../../types/Page.ts";
import {BlockTypes} from "../../types/BlockTypes.ts";

const About = ({id}: { id: number }) => {
    const {pages} = usePagesContext();
    const currentPage = pages.find((page: Page) => page.id === id) as Page;

    return (
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
        </div>
    )
}

export default About;