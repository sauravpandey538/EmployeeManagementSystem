import { NextRequest, NextResponse } from "next/server";
import { uploadToCloudinary } from "@/lib/uploadToCloudinary";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    const fileBuffer = await file.arrayBuffer();

    const mimeType = file.type;
    const encoding = "base64";
    const base64Data = Buffer.from(fileBuffer).toString("base64");

    const fileUri = "data:" + mimeType + ";" + encoding + "," + base64Data;

    const res = await uploadToCloudinary(fileUri, file.name);
    if (!(res.success && res.result)) {
      return NextResponse.json({ message: "failure" }, { status: 500 });
    }
    return NextResponse.json(
      {
        message: "success",
        imgUrl: res.result.secure_url,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
