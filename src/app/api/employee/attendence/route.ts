import db from "@/lib/db";
import { NextResponse, NextRequest } from "next/server";
import { format } from "date-fns";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { employee_id } = data;

  try {
    const now = new Date();
    const existingRecord = await db("attendence_details")
      .whereRaw("DATE(check_in) = ?", [format(now, "yyyy-MM-dd")])
      .andWhere({
        employee_id,
        check_out: null,
      })
      .first();
    console.log(existingRecord);
    if (existingRecord) {
      // Update the check_out timestamp
      await db("attendence_details")
        .where({ id: existingRecord.id })
        .update({ check_out: now });

      return NextResponse.json(
        { message: "Attendance checkout done successfully!" },
        { status: 200 }
      );
    } else {
      // Insert a new record with timestamps
      await db("attendence_details").insert({
        employee_id,
        check_in: now,
        check_out: null,
        date: now,
      });

      return NextResponse.json(
        { message: "Attendance recorded successfully!" },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error processing request",
        error,
      },
      { status: 500 }
    );
  }
}

// working perfectly

//{
//   "employee_id": "E004"
// }

// testing for git g
// this is changes from testing branch.
