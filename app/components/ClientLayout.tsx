"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ChatButtons = dynamic(() => import("./ChatButtons"), { ssr: false });
const FontSizeControl = dynamic(() => import("./FontSizeControl"), { ssr: false });
const Footer = dynamic(() => import("./Footer"), { ssr: false });

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.7) setShowChat(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {children}
      {/* {showChat && <ChatButtons />} */}
      <FontSizeControl />
      <Footer />
    </>
  );
}
