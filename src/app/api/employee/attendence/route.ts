import db from "@/lib/db";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  try {
    await db("attendence_details").insert(data);
    return NextResponse.json(
      {
        message: "Attendence recorded sucessfuly !",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error connecting connection", error },
      { status: 500 }
    );
  }
}
