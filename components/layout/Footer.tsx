"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Layers,
} from "lucide-react";
import { CONTACT_INFO } from "@/lib/contact";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || CONTACT_INFO.email;
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE || CONTACT_INFO.phone;

  return (
    <footer className="w-full bg-[#222222] text-[#E0E0E0] mt-auto font-sans">
      
      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-16 pb-16 space-y-12">
        
        {/* ========================================================================= */}
        {/* TOP CENTERED BRAND LOGO & MARK (Matching Reference Flexile Header) */}
        {/* ========================================================================= */}
        <div className="flex items-center justify-center">
          <BrandLogo
            theme="dark"
            size="xl"
            withGlow
            textClassName="text-2xl sm:text-3xl font-extrabold tracking-tight text-white group-hover:text-[#FF4D2E]"
          />
        </div>

        {/* ========================================================================= */}
        {/* 4-COLUMN LINKS & CONTACT GRID */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 pt-4 text-xs sm:text-sm">
          
          {/* Column 1: TERMS */}
          <div className="space-y-4">
            <h4 className="font-sans font-extrabold text-xs tracking-wider uppercase text-white">
              TERMS
            </h4>
            <ul className="space-y-2.5 font-sans text-xs text-[#9E9E9E]">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cancellation" className="hover:text-white transition-colors">
                  Cancellation Policy
                </Link>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-default">
                  Copyrights &amp; IP Rights
                </span>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Fees and Scope SLA
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: RESOURCES */}
          <div className="space-y-4">
            <h4 className="font-sans font-extrabold text-xs tracking-wider uppercase text-white">
              RESOURCES
            </h4>
            <ul className="space-y-2.5 font-sans text-xs text-[#9E9E9E]">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Architecture Blueprint
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  Case Studies &amp; Press
                </Link>
              </li>
              <li>
                <Link href="/style-guide" className="hover:text-white transition-colors">
                  Design System Tokens
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Sprint Delivery Models
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white transition-colors">
                  Direct Founder Engine
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: LINKS */}
          <div className="space-y-4">
            <h4 className="font-sans font-extrabold text-xs tracking-wider uppercase text-white">
              LINKS
            </h4>
            <ul className="space-y-2.5 font-sans text-xs text-[#9E9E9E]">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: STAY CONNECTED */}
          <div className="space-y-4">
            <h4 className="font-sans font-extrabold text-xs tracking-wider uppercase text-white">
              STAY CONNECTED
            </h4>
            
            <div className="space-y-2 font-sans text-xs text-[#9E9E9E]">
              {/* Phone */}
              <a
                href={`tel:${contactPhone.replace(/\s+/g, "")}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF4D2E] shrink-0" />
                <span>{contactPhone}</span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${contactEmail}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#FF4D2E] shrink-0" />
                <span className="truncate">{contactEmail}</span>
              </a>

              {/* Location */}
              <div className="flex items-start gap-2.5 hover:text-white transition-colors">
                <MapPin className="w-3.5 h-3.5 text-[#FF4D2E] shrink-0 mt-0.5" />
                <span>Hyderabad, Telangana, India</span>
              </div>
            </div>

            {/* Social Icons Square Buttons (Exact Replica of Reference Design f, X, in, ig) */}
            <div className="flex items-center gap-2 pt-2">
              {/* Facebook / F */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded bg-white hover:bg-[#FF4D2E] text-[#222222] hover:text-white flex items-center justify-center transition-all shadow-xs cursor-pointer font-bold text-xs"
                title="Facebook"
              >
                f
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded bg-white hover:bg-[#FF4D2E] text-[#222222] hover:text-white flex items-center justify-center transition-all shadow-xs cursor-pointer font-bold text-xs"
                title="X (Twitter)"
              >
                𝕏
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded bg-white hover:bg-[#FF4D2E] text-[#222222] hover:text-white flex items-center justify-center transition-all shadow-xs cursor-pointer font-bold text-[11px]"
                title="LinkedIn"
              >
                in
              </a>

              {/* WhatsApp */}
              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded bg-white hover:bg-[#FF4D2E] text-[#222222] hover:text-white flex items-center justify-center transition-all shadow-xs cursor-pointer"
                title="WhatsApp Direct"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* BOTTOM SIGNATURE RED / TERRACOTTA ACCENT BAR (Flexile Footer #20) */}
      {/* ========================================================================= */}
      <div className="w-full bg-[#FF4D2E] text-white py-3.5 px-6 sm:px-10 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-sans font-medium">
          
          {/* Left Copyright */}
          <div>
            &copy; {currentYear} Raultz Studio | All Rights Reserved.
          </div>

          {/* Right Horizontal Navigation Menu Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-7 text-xs font-semibold">
            <Link href="/about" className="hover:text-black/80 transition-colors">
              Who We Are
            </Link>
            <Link href="/services" className="hover:text-black/80 transition-colors">
              What We Do
            </Link>
            <Link href="/portfolio" className="hover:text-black/80 transition-colors">
              Our Process
            </Link>
            <Link href="/pricing" className="hover:text-black/80 transition-colors">
              Pricing
            </Link>
            <Link href="/contact" className="hover:text-black/80 transition-colors">
              Contact
            </Link>
          </div>

        </div>
      </div>

    </footer>
  );
}
