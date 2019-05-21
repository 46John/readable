import { receivePosts } from "./posts";

function getAllPosts () {
    return fetch('http://localhost:3001/posts',{ headers: { 'Authorization': 'whatever-you-want' }})
        .then((resp) => resp.json())
        .then((data) => data)
}

export function handleInitialData () {
    return (dispatch) => {
        return getAllPosts()
            .then((data) => {
                console.log('returned: ', data);
                dispatch(receivePosts(data))
            })
    }
}