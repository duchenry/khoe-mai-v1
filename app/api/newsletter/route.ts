import { supabaseServer } from "@/lib/supabaseClient";
import { transporter } from "@/lib/mailer";
import { NextResponse } from "next/server";
import path from "path";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { message: "Invalid email address" },
        { status: 400 }
      );
    }

    // 🗂️ Lưu email vào Supabase
    const { error } = await supabaseServer.from("newsletter").insert([{ email }]);
    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { message: "error", error: "Supabase insert error" },
        { status: 500 }
      );
    }

    // 📎 Đường dẫn tới file PDF
    const pdfPath = path.join(process.cwd(), "public", "files", "HealthyGuide.pdf");

    // 📧 Gửi email cảm ơn
    await transporter.sendMail({
      from: `"Khỏe Mãi" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Cảm ơn bạn đã đăng ký 🌿",
      html: `
        <h2>Chào bạn!</h2>
        <p>Cảm ơn bạn đã đăng ký nhận bài viết mới từ <b>Khỏe Mãi</b>.</p>
        <p>Hãy kiểm tra hộp thư mỗi tuần để nhận bài viết sức khỏe hữu ích nhé 💪</p>
      `,
      attachments: [
        {
          filename: "HealthyGuide.pdf",
          path: pdfPath,
          contentType: "application/pdf",
        },
      ],
    });

    // ✅ Trả về JSON rõ ràng cho React xử lý
    return NextResponse.json({ message: "success" });
  } catch (err: any) {
    console.error("Server error:", err);
    return NextResponse.json(
      { message: "error", error: err.message || "Server error" },
      { status: 500 }
    );
  }
}
