import db from "@/lib/db";
import { sendEmail } from "@/lib/sendmail";
import { NextResponse, NextRequest } from "next/server";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

function generateOTP(): number {
  const otp: number = Math.floor(100000 + Math.random() * 900000);
  if (String(otp).length === 6) {
    return otp;
  } else {
    throw new Error("Failed to generate a valid OTP");
  }
}

async function saveOtpToDb(email: string, otp: number) {
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour expiry time

  await db("otp_records").insert({
    email,
    otp,
    expires_at: expiresAt,
  });
}

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email) {
      return NextResponse.json(
        { message: "Please enter your email" },
        { status: 402 }
      );
    }

    const otp = generateOTP();
    await sendEmail(email, otp);

    // Save OTP and expiry time to MySQL
    await saveOtpToDb(email, otp);

    return NextResponse.json(
      { message: "OTP sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error sending verification code." },
      { status: 500 }
    );
  }
}
