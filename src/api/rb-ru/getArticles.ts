import {baseUrl} from "../index.ts";
import {RbArticle} from "../../types/RbArticle.ts";

interface ArticlesParams {
    limit: number;
    tag: number;
}

interface ArticlesResponse {
    articles: RbArticle[];
    limit: number;
    next_page: number | null;
    num_pages: number;
    objects_count: number;
    orphans: number;
    status_code: number;
    status_message: string;
}

export const getRbArticles = async (params: ArticlesParams): Promise<ArticlesResponse> => {
    const {limit, tag} = params;
    const url = baseUrl + `rb-articles/limit/${limit}/tag/${tag}`;

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        });

        return await response.json();
    } catch (e) {
        return {
            articles: [],
            limit: 0,
            next_page: null,
            num_pages: 0,
            objects_count: 0,
            orphans: 0,
            status_code: 0,
            status_message: '',
        };
    }
}