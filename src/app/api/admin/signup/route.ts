import db from "@/lib/db";
import { sendEmail } from "@/lib/sendmail";
import { NextResponse, NextRequest } from "next/server";

function generateOTP() {
  const otp: number = Math.floor(100000 + Math.random() * 900000);
  if (String(otp).length === 6) {
    return otp;
  } else {
    throw new Error("Failed to generate a valid OTP");
  }
}

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  const otp = generateOTP();
  await sendEmail(email, otp);
  return NextResponse.json(
    { message: "OTP sent successfully" },
    { status: 200 }
  );
}
