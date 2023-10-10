interface ContentBlock {
    id: string;
    type: string;
    data: {
        text: string;
    }
}

interface PageContent {
    time: number;
    version: string,
    blocks: ContentBlock[];
}

export interface PageData {
    postId: number;
    title: string;
    content: PageContent
}