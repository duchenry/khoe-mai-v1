"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatButtons() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed z-[9999] bottom-4 right-4 flex flex-col items-end space-y-3 sm:space-y-2">
      {/* Popup menu for mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-3 mb-2 sm:hidden"
          >
            <a
              href="https://m.me/henry.nguyen.81314"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#0084ff] text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg"
            >
              <MessengerIcon />
              <span className="text-sm font-medium">Messenger</span>
            </a>
            <a
              href="https://zalo.me/0333036247"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#0b86ff] text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg"
            >
              <ZaloIcon />
              <span className="text-sm font-medium">Zalo</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button (mobile toggle / desktop fixed buttons) */}
      <div className="hidden sm:flex flex-col gap-2">
        {/* Messenger button */}
        <a
          href="https://m.me/henry.nguyen.81314"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#0084ff] text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:-translate-y-[2px] transition-transform"
        >
          <MessengerIcon />
          <span className="font-medium">Messenger</span>
        </a>

        {/* Zalo button */}
        <a
          href="https://zalo.me/0333036247"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#0b86ff] text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:-translate-y-[2px] transition-transform"
        >
          <ZaloIcon />
          <span className="font-medium">Zalo</span>
        </a>
      </div>

      {/* Mobile FAB (Floating Action Button) */}
      <button
        onClick={() => setOpen(!open)}
        className="sm:hidden w-14 h-14 bg-[#0084ff] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
        aria-label="Mở chat"
      >
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            className="w-7 h-7"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.2}
            className="w-7 h-7"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>
    </div>
  );
}

/* === SVG ICONS === */
function MessengerIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M12 2C6.48 2 2 6.08 2 11.2c0 2.94 1.54 5.59 4.02 7.14V22l3.06-1.7c.98.27 2.01.42 3 .42 5.52 0 10-4.08 10-9.2S17.52 2 12 2zm1.05 12.25L9 11.5l-3.05 2.75L12 8.5l1.05 1.75L15 8.5 13.05 14.25z" />
    </svg>
  );
}

function ZaloIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12c0 2.21.8 4.24 2.13 5.82L4 22l4.47-1.18A9.94 9.94 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm1.2 6.2l-2.8 4.8-1.9-2.7-1.7 1.2L11 17l5.4-8.4-3.2-.4z" />
    </svg>
  );
}
