import { NextResponse } from "next/server"

// Portfolio demo: never forward messages to a real client service.
export async function POST() {
  return NextResponse.json(
    { error: "Demo only. No messages are sent or stored." },
    { status: 403 }
  )
}
