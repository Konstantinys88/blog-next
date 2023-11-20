'use client';

import { useState, FormEventHandler } from "react";
import { getPostsBySearch } from "@/services/getPost";

import "./postSearch.scss";

interface Props {
    onSearch: (value: any[]) => void
}

const PostsSearch = ({ onSearch }: Props) => {
    const [search, setSearach] = useState('');

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const posts = await getPostsBySearch(search);
        onSearch(posts);

    }


    return (

        <form onSubmit={handleSubmit} className="search" >
            <input
                type="search"
                placeholder="search"
                value={search}
                onChange={e => setSearach(e.target.value)} />
            <button type="submit">Search</button>
        </form>

    )
}

export { PostsSearch }