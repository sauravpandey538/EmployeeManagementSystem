import cloudinary from "./cloudinary";
import { NextRequest } from "next/server";

export const uploadToCloudinary = (
  fileUri: string,
  fileName: string
): Promise<any> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload(fileUri, {
        invalidate: true,
        resource_type: "auto",
        filename_override: fileName,
        folder: "employee-images", // any sub-folder name in your cloud
        use_filename: true,
      })
      .then((result: any) => {
        resolve({ success: true, result });
      })
      .catch((error) => {
        reject({ success: false, error });
      });
  });
};
