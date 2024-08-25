import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./utils/jwt";
import { RequestCookies } from "next/dist/compiled/@edge-runtime/cookies";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log("checking");
  let token = request.cookies.get("authToken")?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/", request.url)); // Redirect to login if no token
  }
  if (!process.env.JWT_SECRET_KEY) {
    return NextResponse.json({ message: "Verify key wasn't provided" });
  }
  const isVerifiedUser = verifyToken(token);
  if (!isVerifiedUser) {
    return NextResponse.redirect(new URL("/", request.url)); // Redirect to login if no token
  }
  console.log(isVerifiedUser);
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/authenticated"],
};
