import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const data = await request.json();
    console.log(data);

    const { employeeId } = data;
    const existingEmployee = await db("user").where({ employeeId }).first();
    if (existingEmployee) {
      return NextResponse.json(
        { message: "Employee ID already exists" },
        { status: 400 }
      );
    }

    const [id] = await db("user").insert(data).returning("id");

    return NextResponse.json(
      { message: "Operation sucessful" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saving users:", error);
    return NextResponse.json(
      { error: "Internal Server Error Came" },
      { status: 500 }
    );
  }
}
