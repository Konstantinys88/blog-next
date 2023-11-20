"use client";
import { getAllPosts } from "@/services/getPost";
import { Metadata } from "next";
import { useEffect, useState } from "react";

import { Posts } from "@/components/Posts";
import { PostsSearch } from "@/components/PostSearch";




export const metadata: Metadata = {
    title: 'Blog | Next App',
}

export default function Blog() {

    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllPosts()
            .then(setPosts)
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            <h1>Blog page</h1>
            <PostsSearch onSearch={setPosts} />
            {loading ? <h3>Loading....</h3> : <Posts posts={posts} />}

        </>
    )
}