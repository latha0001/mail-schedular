import type { Mailer, List, Mailing } from "./types"

export async function getMailers(): Promise<Mailer[]> {
    const response = await fetch("/api/mailers")
    if (!response.ok) {
        throw new Error("Failed to fetch mailers")
    }
    return response.json()
}

export async function getLists(): Promise<List[]> {
    const response = await fetch("/api/lists")
    if (!response.ok) {
        throw new Error("Failed to fetch lists")
    }
    return response.json()
}

export async function createMailing(mailing: Omit<Mailing,"id">): Promise<Mailing> {
    const response = await fetch("/api/mailings", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(mailing),
    })
    if (!response.ok) {
        throw new Error("Failed to create Mailing")
    }
    return response.json()
}