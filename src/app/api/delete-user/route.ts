import db from "@/lib/db";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { employeeId } = await req.json();
    const isEmployeeExis = await db("user").where({ employeeId }).first();
    if (!isEmployeeExis) {
      return NextResponse.json(
        { message: "Employee didn't match" },
        { status: 404 }
      );
    }
    await db("user").where({ employeeId }).del();

    return NextResponse.json(
      { message: "Employee deleted sucessfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error deleting employee" },
      { status: 500 }
    );
  }
}
