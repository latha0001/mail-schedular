import { NextResponse } from "next/server"
import type { Mailing } from "@/lib/types"

const mailings: Mailing[] = []

export async function GET() {
    return NextResponse.json(mailings)
}

export async function POST(request: Request) {
    const body = await request.json()
    const newMailing: Mailing = {
        id: (mailings.length + 1).toString(),
        ...body,
    }
    mailings.push(newMailing)
    return NextResponse.json(newMailing, { status: 201 })

}