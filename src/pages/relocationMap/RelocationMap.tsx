import {usePagesContext} from "../../providers/PagesProvider.tsx";
/** Assets */
import recolationBg from '@/assets/relocationMap.png';
import lineGray from '@/assets/relocation-line-gray.png';
import lineGold from '@/assets/relocation-line-gold.png';
/** Types */
import {Page} from "../../types/Page.ts";
import {BlockTypes} from "../../types/BlockTypes.ts";

const RelocationMap = ({id}: { id: number }) => {
    const {pages} = usePagesContext();
    const currentPage = pages.find((page: Page) => page.id === id) as Page;

    return (
        <div className="content-text content--relocation">
            <div className="title">{currentPage.title}</div>
            <div className="relocatin-block-text">
                {currentPage.content.map((block, idx: number) => (
                    block.blockType === BlockTypes.TEXT_CONTENT && (
                        <div
                            key={idx}
                            className="paragraph"
                            dangerouslySetInnerHTML={{__html: block.html}}
                        />
                    )
                ))}
                <a href="#" className="btn">Перейти к проекту</a>
                <div className="relocation-block-img">
                    <div className="relocation-line relocation-line--gray">
                        <img src={lineGray} alt=""/>
                    </div>
                    <img src={recolationBg} alt=""/>
                    <div className="relocation-line relocation-line--gold">
                        <img src={lineGold} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RelocationMap;