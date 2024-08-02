import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const data = await request.json();
    console.log(data);
    // Insert data into the 'user' table
    const [id] = await db("user").insert(data).returning("id");

    return NextResponse.json({ id });
  } catch (error) {
    console.error("Error saving users:", error);
    return NextResponse.json(
      { error: "Internal Server Error Came" },
      { status: 500 }
    );
  }
}
