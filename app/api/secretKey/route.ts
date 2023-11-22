import { NextResponse } from "next/server";

export async function GET(req: Request) {

    const API_KEY = process.env.OMDB_SECRET;

    const secret = await fetch(`${API_KEY}`).then(res => res.json())

    return NextResponse.json(secret)

}

// 'https://jsonplaceholder.typicode.com/posts'
// https://www.youtube.com/watch?v=cwKivht4blQ&list=PLiZoB8JBsdzlgeYHZDJ_orG0vy8JiEhKr&index=3