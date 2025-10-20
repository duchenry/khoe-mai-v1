import { supabase } from "@/lib/supabaseClient";
import { transporter } from "@/lib/mailer";
import { NextResponse } from "next/server";
import path from "path";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    // Lưu vào Supabase
    const { error } = await supabase.from("newsletter").insert([{ email }]);
    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json({ error: "Supabase insert error" }, { status: 500 });
    }
    const pdfPath = path.join(process.cwd(), "public", "files", "HealthyGuide.pdf");

    console.log("pdfPath", pdfPath)

    // Gửi email xác nhận
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

    return NextResponse.json({ message: "Đăng ký và gửi mail thành công 🎉" });
  } catch (err: any) {
    console.error("Server error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
