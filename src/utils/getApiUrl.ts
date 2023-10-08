export const getPostDataById = (postId: string | number): string => {
    const host = import.meta.env.API_HOST;
    const protocol = import.meta.env.API_PORT;
    const path = 'api/v1/posts';

    return `${host}:${protocol}/${path}/${postId}`;
}