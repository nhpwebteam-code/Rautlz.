"use client";

import { Phone, MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "@/lib/contact";

export function StickyMobileCTA() {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(
    "Hi Raultz team, I'd like to discuss a custom website / app project."
  )}`;

  return (
    <aside
      aria-label="Quick Contact Actions"
      className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-[#FAF7F2]/95 backdrop-blur-xl border-t border-[#E2D6C3] px-4 py-2.5 shadow-[0_-8px_24px_rgba(31,27,22,0.08)]"
    >
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={`tel:${CONTACT_INFO.phoneRaw}`}
          aria-label="Call Raultz Founding Team directly"
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1F1B16] text-[#FAF7F2] font-sans text-xs font-bold tracking-wide active:scale-[0.98] transition-transform shadow-xs"
        >
          <Phone className="w-4 h-4 text-[#FAF7F2] shrink-0" aria-hidden="true" />
          <span>Call Studio</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Raultz on WhatsApp"
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] text-white font-sans text-xs font-bold tracking-wide active:scale-[0.98] transition-transform shadow-xs"
        >
          <MessageCircle className="w-4 h-4 text-white shrink-0" aria-hidden="true" />
          <span>WhatsApp</span>
        </a>
      </div>
    </aside>
  );
}
