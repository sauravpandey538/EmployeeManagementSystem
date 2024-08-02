// app/api/user/route.ts

import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const query = Object.fromEntries(url.searchParams.entries());
    let queryBuilder = db("user").select("*");

    const { name, facultyType, employeeId } = query;
    console.log(name, facultyType, employeeId);

    if (name) {
      queryBuilder = queryBuilder.where("fullName", "like", `%${name}%`);
    }
    if (employeeId) {
      queryBuilder = queryBuilder.where("employeeId", employeeId);
    }
    if (facultyType) {
      queryBuilder = queryBuilder.where("facultyType", facultyType);
    }

    const user = await queryBuilder.clearSelect().select("*").first();
    if (!user) {
      return NextResponse.json(
        { message: "User don't exist", user: null },
        { status: 404 }
      );
    }

    return NextResponse.json({ user: user, employeeId });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error getting user data", error },
      { status: 500 }
    );
  }
}
