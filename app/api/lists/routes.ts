import { NextResponse } from "next/server"
import type { List } from "@/lib/types"

const lists: List[] = [
    { id: "1", name: "New Subscribers" },
    { id: "2", name: "Active Users" },
    { id: "3", name: "VIP Customers" },
]

export async function GET() {
    return NextResponse.json(lists)
}