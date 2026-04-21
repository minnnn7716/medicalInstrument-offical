import { NextResponse } from "next/server"

// Historical portfolio demo: no outbound requests and no storage.
export async function POST() { return NextResponse.json({ ok: true, demo: true }) }
