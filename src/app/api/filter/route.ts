import db from "@/lib/db";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { specialist, holiday, type } = await req.json();
    let query = db("employee");
    console.log(specialist, holiday);
    //Development Team [ 'Thursday', 'Friday', 'Saturday' ]

    // Apply filters based on the request body
    if (specialist) {
      query = query.where("specialist", specialist);
    }
    if (type) {
      query = query.where("type", type);
    }
    if (holiday && holiday.length > 0) {
      // It works with JSON arrays and objects.
      query = query.whereRaw("JSON_CONTAINS(holiday, ?)", [
        JSON.stringify(holiday),
      ]);
    }

    const employees = await query;

    return NextResponse.json(
      { message: "Employees fetched successfully", employees },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error", error },
      { status: 500 }
    );
  }
}
