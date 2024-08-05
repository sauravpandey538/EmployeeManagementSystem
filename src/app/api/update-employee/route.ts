import { NextResponse, NextRequest } from "next/server";
import db from "@/lib/db";
interface DataFormat {
  phoneNumber: string;
  email: string;
  linkedIn: string;
  picture: string | undefined;
  cv: string | undefined;
  employeeId: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: DataFormat = await request.json();
    const { employeeId } = data as DataFormat;
    const user = await db("user").where({ employeeId }).first();
    if (!user) {
      return NextResponse.json(
        { message: "No user found with this request" },
        { status: 404 }
      );
    }
    console.log(user, data);
    const newData = await db("details").insert(data);
    return NextResponse.json(
      { message: "Employee data updated sucessfuly", newData },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error", error },
      { status: 500 }
    );
  }
}
