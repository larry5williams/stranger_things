import React, { useEffect, useState } from "react";

const Post = () => {
    const [posts, setPosts] = useState([])
    const APIURL = https://strangers-things.herokuapp.com/api/2202-ftb-et-web-pt

    useEffect(() => {
        async function fetchPost() {
        const response = await fetch(`${APIURL}/posts`);
        const result = await response.json();
            if (result.error) throw result.error;
                setPosts(result.data.posts)}
                fetchPost()
    }, [])

    return (
        <>
        <div>Post Component</div>
        <div>
            {
        posts && posts.length && posts.map(post => {return post.description})
            }
        </div>
        </>
    )
}