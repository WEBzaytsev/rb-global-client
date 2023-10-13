// import {ApiError} from "../../types/ApiError.ts";
// import {RbEvent} from "../../types/RbEvent.ts";
// import {PostType} from "../../types/PostType.ts";
// import {PageData} from "../../types/PageData.ts";
import {Page} from "../../types/Page.ts";

const protocol = import.meta.env.VITE_API_PROTOCOL;
const hostname = import.meta.env.VITE_API_HOSTNAME;
const port = import.meta.env.VITE_API_PORT;
const pathname = import.meta.env.VITE_API_PATHNAME;
const baseUrl = `${protocol}://${hostname}:${port}/${pathname}`;

export const getPages = async (): Promise<Page[]> => {
    const url = baseUrl + 'pages';

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        });

        return await response.json() as Page[];
    } catch (e) {
        return [];
    }
}
//
// export const getPost = async (postId: number, postType: PostType = 'posts'): Promise<ApiError | RbEvent | PageData> => {
//     const url = `${host}:${protocol}/${path}/${postType}/${postId}`;
//
//    try {
//        const response = await fetch(url, {
//            method: "GET",
//            headers: {
//                "access-control-allow-origin": "*",
//                "Content-type": "application/json; charset=UTF-8"
//            }
//        });
//
//        return await response.json() as PageData | RbEvent;
//    } catch (e: Error) {
//        return {
//            status: false,
//            name: e.name,
//            message: e.message
//        } as ApiError;
//    }
// }