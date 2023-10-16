import {BlockTypes} from "../BlockTypes.ts";

export interface TextContent {
    id: number;
    html: string;
    blockType: BlockTypes.TEXT_CONTENT;
}
