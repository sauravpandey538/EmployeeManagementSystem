import nodemailer from "nodemailer";

// Define an async function to use `await`
export async function sendEmail(email: string, otp: number) {
  console.log(process.env.NODEMAILER_USER, process.env.NODEMAILER_PASS);
  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.NODEMAILER_USER!,
        pass: process.env.NODEMAILER_PASS!,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.NODEMAILER_USER, // Sender's email address
      to: email, // Receiver's email address
      subject: "Verification OTP",
      text: `Use ${otp} as a verification number`, // The OTP or other message content
    };

    // Send email and await the response
    const mailResponse = await transporter.sendMail(mailOptions);

    console.log("Email sent successfully:", mailResponse);
    return mailResponse;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error; // Optional: Rethrow the error for further handling
  }
}
