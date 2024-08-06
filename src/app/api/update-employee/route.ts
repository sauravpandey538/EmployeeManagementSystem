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
    const { phoneNumber, email, linkedIn, employeeId } = data as DataFormat;
    const user = await db("user").where({ employeeId }).first();
    if (!user) {
      return NextResponse.json(
        { message: "No user found with this request" },
        { status: 404 }
      );
    }
    console.log(user, data);

    // Check if phone number already exists
    const existingPhone = await db("details").where({ phoneNumber }).first();
    if (existingPhone) {
      return NextResponse.json(
        { message: "Phone number already in use" },
        { status: 409 } // Conflict
      );
    }

    // Check if email already exists
    const existingEmail = await db("details").where({ email }).first();
    if (existingEmail) {
      return NextResponse.json(
        { message: "Email already in use" },
        { status: 409 } // Conflict
      );
    }

    // Check if LinkedIn URL already exists
    const existingLinkedIn = await db("details").where({ linkedIn }).first();
    if (existingLinkedIn) {
      return NextResponse.json(
        { message: "LinkedIn URL already in use" },
        { status: 409 } // Conflict
      );
    }

    await db("details").insert(data);
    const userDetails = await db("user")
      .select(
        "user.*",
        "details.phoneNumber",
        "details.email",
        "details.linkedIn",
        "details.image"
      )
      .leftJoin("details", "user.employeeId", "details.employeeId")
      .where("user.employeeId", user.employeeId)
      .first();
    return NextResponse.json(
      { message: "Employee data updated sucessfuly", result: userDetails },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error", error },
      { status: 500 }
    );
  }
}
