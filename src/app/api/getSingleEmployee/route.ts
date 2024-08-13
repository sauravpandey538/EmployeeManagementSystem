import db from "@/lib/db";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { employeeId } = await req.json();
  console.log(employeeId, typeof employeeId);
  try {
    const targetedEmployee = await db("employee")
      .where("employeeId", employeeId)
      .first();
    if (!targetedEmployee) {
      return NextResponse.json(
        { message: "No employee found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ targetedEmployee }, { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
