import db from "@/lib/db";
import { NextResponse, NextRequest } from "next/server";

// interface ExpectedData {
//   leave_id: any;
//   employee_id: string;
//   leave_type: "Vaccation" | "PersonalEvents" | "Sick";
//   start_date: Date | string;
//   end_date: Date | string;
//   applied_date: Date | string;
//   reason: string;
// }

export async function POST(req: NextRequest) {
  const data = await req.json();
  try {
    await db("leave_details").insert(data);
    return NextResponse.json(
      {
        message:
          "Successfully applied for leave. Please wait for admin reply kindly !",
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
