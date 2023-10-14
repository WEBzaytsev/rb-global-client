import {ApiError} from "../../types/ApiError.ts";

const api = (import.meta.env.MODE === 'development') ? 'http://localhost:3000' : 'https://rb.ru';

export const getArticles = async (tag: number, limit: number): Promise<ApiError> => {
    try {
        const headers = {
            "access-control-allow-origin" : "*",
            "Content-type": "application/json; charset=UTF-8",
        }

        if (import.meta.env.MODE == 'development') {
            const username = import.meta.env.VITE_RBRU_API_USER;
            const password = import.meta.env.VITE_RBRU_API_PASSWORD;
            const credentials = btoa(`${username}:${password}`);
            // todo: fix types
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            headers['Authorization'] = `Basic ${credentials}`;
        }

        const response = await fetch(`${api}/api/articles?tag=${tag}&limit=${limit}`, {
            method: "GET",
            headers
        });

        // TODO: set returned type
        return await response.json();
        // todo: fix types
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
    } catch (e: Error) {
        return {
            status: false,
            name: e.name,
            message: e.message
        } as ApiError;
    }
}