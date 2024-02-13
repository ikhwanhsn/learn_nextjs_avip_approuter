import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ status: 200, name: "John Doe" });
}
