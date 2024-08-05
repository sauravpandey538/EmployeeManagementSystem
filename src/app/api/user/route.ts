import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const query = Object.fromEntries(url.searchParams.entries());
    let queryBuilder = db("user").select("*");

    const { name, facultyType, employeeId } = query;

    if (name) {
      queryBuilder = queryBuilder.where("fullName", "like", `%${name}%`);
    }
    if (employeeId) {
      queryBuilder = queryBuilder.where("employeeId", employeeId);
    }
    if (facultyType) {
      queryBuilder = queryBuilder.where("facultyType", facultyType);
    }

    // Fetch users based on the query
    const users = await queryBuilder;

    if (users.length === 0) {
      return NextResponse.json(
        { message: "No users found", users: null },
        { status: 404 }
      );
    }

    // Fetch user details if users are found
    const usersWithDetails = await Promise.all(
      users.map(async (user) => {
        const userDetails = await db("user")
          .select(
            "user.*",
            "details.phoneNumber",
            "details.email",
            "details.linkedIn",
            "details.image"
          )
          .leftJoin("details", "user.employeeId", "details.employeeId")
          .where("user.employeeId", user.employeeId) // Assuming employeeId is unique per user
          .first();

        return userDetails;
      })
    );
    // console.log(usersWithDetails);
    return NextResponse.json({
      users: usersWithDetails ? usersWithDetails : users,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error getting user data", error },
      { status: 500 }
    );
  }
}
