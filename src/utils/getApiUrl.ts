export const getPostDataById = (postId: string | number): string => {
    const host = import.meta.env.VITE_HOST;
    const protocol = import.meta.env.VITE_PROTOCOL;
    const path = 'api/v1/posts';

    return `${host}:${protocol}/${path}/${postId}`;
}