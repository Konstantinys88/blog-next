import { NextResponse } from "next/server"
import { headers, cookies } from 'next/headers'
import { redirect } from "next/navigation";

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const id = params.id

    redirect('/blog')

    return NextResponse.json({ id });
}