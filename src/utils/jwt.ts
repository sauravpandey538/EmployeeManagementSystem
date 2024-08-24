import jwt, { JwtPayload } from "jsonwebtoken";

interface TokenPayload {
  firebase_id: string;
  email: string;
  role: string;
  // Add other fields as needed
}

const generateToken = (payload: TokenPayload): string => {
  if (!process.env.JWT_SECRET_KEY) {
    throw new Error("JWT_SECRET_KEY is not set");
  }

  try {
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: "30d",
    });
    return token;
  } catch (error) {
    console.error("Error during generating token:", error);
    throw new Error("Error during generating token");
  }
};

const verifyToken = (token: string): JwtPayload | null => {
  if (!process.env.JWT_SECRET_KEY) {
    throw new Error("JWT_SECRET_KEY is not set");
  }

  try {
    const isVerified = jwt.verify(
      token,
      process.env.JWT_SECRET_KEY
    ) as JwtPayload;
    return isVerified;
  } catch (error) {
    console.error("Error during verifying token:", error);
    return null;
  }
};

export { generateToken, verifyToken };
