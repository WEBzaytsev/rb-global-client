interface ArticleCategory {
    id: number;
    name: string;
    slug: string;
}

interface ArticleAuthor {
    id: number;
    about: string | null;
    email: string | null;
    full_name: string | null;
    image: string | null;
    url: string | null;
}

interface ArticleTag {
    id: number;
    name: string;
    slug: string;
}

export interface RbArticle {
    readonly id: number;
    author: ArticleAuthor;
    category: ArticleCategory;
    image: string | null;
    image_for_list: string | null;
    image_for_list_mobile: string | null;
    is_longread: boolean;
    is_show_time: boolean;
    is_young: boolean;
    long_marker: any | null;
    marker: any | null;
    next_news: any | null;
    pixel: string | null;
    short_description: string;
    show_cover_is_spa: boolean;
    slug: string;
    timestamp: number;
    tags: ArticleTag[];
    title: string;
    title_for_list: string;
    url: string;
}