export const getPostDataById = (postId: number): string => {
    const host = import.meta.env.VITE_HOST;
    const protocol = import.meta.env.VITE_PORT;
    const path = 'api/v1/posts';

    return `${host}:${protocol}/${path}/${postId}`;
}