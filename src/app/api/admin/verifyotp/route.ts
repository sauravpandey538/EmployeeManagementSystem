import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth as firebaseauth } from "@/lib/firebase";
import bcrypt from "bcrypt";
import { generateToken } from "@/utils/jwt";

export async function POST(req: NextRequest) {
  try {
    const { email, otp, password, role } = await req.json();

    // Validate required fields
    if (!email || !otp || !password) {
      return NextResponse.json(
        { message: "Email, OTP, and password are required" },
        { status: 400 }
      );
    }

    // Verify OTP validity
    const otpRecord = await db("otp_records")
      .where("email", email)
      .andWhere("otp", otp)
      .andWhere("expires_at", ">", new Date())
      .first();

    if (!otpRecord) {
      return NextResponse.json(
        { message: "Invalid or expired OTP" },
        { status: 400 }
      );
    }

    // Create user in Firebase
    const userCredential = await createUserWithEmailAndPassword(
      firebaseauth!,
      email,
      password
    );
    const user = userCredential.user;

    // Delete OTP record after successful user creation
    await db("otp_records").where("email", email).delete();
    const userData = {
      email,
      firebase_id: user.uid,
      role: role ? role : "Employee",
    };
    await db("user_details").insert(userData);
    // Generate and store JWT in a cookie
    const token = generateToken(userData);
    const response = NextResponse.json(
      { message: "User created successfully", user: user.uid },
      { status: 200 }
    );
    response.cookies.set("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Secure cookie in production
      sameSite: "strict",
      path: "/",
    });

    return response;
  } catch (error: any) {
    console.error("Error during OTP verisfication or user creation:", error);

    // Differentiate Firebase errors if needed
    if (error.code === "auth/email-already-in-use") {
      return NextResponse.json(
        { message: "Email is already in use" },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { message: "Error verifying OTP or creating user." },
      { status: 500 }
    );
  }
}
