import { supabase } from "@/lib/api";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const { error } = await supabase
      .from("subscribers")
      .insert([{ email }]);

    if (error) {
      if (error.code === "23505") {
        // unique violation
        return NextResponse.json({ message: "Email already subscribed" });
      }
      throw error;
    }

    return NextResponse.json({ message: "Subscribed successfully!" });
  } catch (err: any) {
    console.error("Subscription error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
