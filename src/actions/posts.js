
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export function receivePosts (posts) {
    console.log("posts received: ", posts);
    return {
        type: RECEIVE_POSTS,
        posts,
    }
}