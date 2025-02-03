import { NextResponse } from "next/server"
import type { Mailer } from "@/lib/types"

const mailers: Mailer[] = [
    { id: "1", name: "New Subscribers" },
    { id: "2", name: "Active Users" },
    { id: "3", name: "VIP Customers" },
]

export async function GET() {
    return NextResponse.json(mailers)
}