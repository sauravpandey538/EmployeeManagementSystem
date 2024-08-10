import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

// Function to generate a new employee ID
async function generateEmployeeId() {
  const latestEmployee = await db("employee")
    .orderBy("employeeId", "desc")
    .first();

  if (!latestEmployee) {
    return "E001";
  }

  const lastId = latestEmployee.employeeId;
  const idNumber = parseInt(lastId.substring(1), 10);
  const newIdNumber = idNumber + 1;
  return `E${newIdNumber.toString().padStart(3, "0")}`;
}

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const data = await request.json();
    console.log(data);
    const { email, phoneNumber } = data;
    // checking if dublicate employee exit
    // TODO: Learn about first() and why it throwed error when i used it two time in a row below.
    let queryBuilder = db("employee").select("*");

    const existingEmployeeWithNumber = await queryBuilder
      .where("phoneNumber", phoneNumber)
      .first();
    if (existingEmployeeWithNumber) {
      return NextResponse.json(
        { message: "This phoneNumber has been already used." },
        { status: 409 }
      );
    }

    const existingEmployee = await queryBuilder.where("email", email);
    if (existingEmployee) {
      return NextResponse.json(
        { message: "This Email has been already used." },
        { status: 409 }
      );
    }
    console.log("This line", existingEmployeeWithNumber, existingEmployee);

    // Generate a new employee ID
    const newEmployeeId = await generateEmployeeId();

    // Insert the new employee record with the generated ID
    await db("employee")
      .insert({
        fullName: data.fullName,
        email: data.email,
        address: data.address,
        type: data.type,
        holiday: JSON.stringify(data.holiday), // Convert the array to JSON
        info: data.info,
        joinedAt: data.joinedAt,
        workingTime: data.workingTime,
        cv: data.cv,
        image: data.image,
        phoneNumber: data.phoneNumber,
        specialist: data.specialist,
        employeeId: newEmployeeId, // Add the generated employeeId
      })
      .returning("id");

    return NextResponse.json(
      { message: "Operation successful" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saving employee:", error);
    return NextResponse.json(
      { message: "Internal Server Error Came", error },
      { status: 500 }
    );
  }
}
