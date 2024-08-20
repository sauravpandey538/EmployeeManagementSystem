import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/lib/firebase";
import bcrypt from "bcrypt";
export async function POST(req: NextRequest) {
  try {
    const { email, otp, password } = await req.json();

    if (!email || !otp || !password) {
      return NextResponse.json(
        { message: "Email, OTP, and password are required" },
        { status: 400 }
      );
    }

    // Check if OTP is valid
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
    console.log("operation:", otpRecord);
    // Create user in Firebase
    // const hashedPassword = await bcrypt.hash(password, 10);
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    // hashing is done by firebase, double safety above
    // Remove OTP record from database
    await db("otp_records").where("email", email).delete();

    return NextResponse.json(
      { message: "User created successfully", user: user.uid },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error verifying OTP or creating user." },
      { status: 500 }
    );
  }
}

// send otp, verify, save to firebase and then delete otp database.
