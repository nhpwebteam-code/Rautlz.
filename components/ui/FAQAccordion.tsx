"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

export interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function FAQAccordion({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Clear answers about our engineering process, sprint deliverables, and collaboration model.",
  className = "",
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const schemaJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      aria-labelledby="faq-heading"
      className={`w-full max-w-4xl mx-auto px-4 sm:px-8 py-16 sm:py-20 ${className}`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />
      <div className="text-center space-y-3 mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE6D8] text-[#1F1B16] text-xs font-mono font-bold uppercase tracking-wider">
          <HelpCircle className="w-3.5 h-3.5 text-[#FF4D2E]" aria-hidden="true" />
          <span>Clarity & Answers</span>
        </div>
        <h2
          id="faq-heading"
          className="font-sans text-2xl sm:text-4xl font-extrabold text-[#1F1B16] tracking-tight"
        >
          {title}
        </h2>
        {subtitle && (
          <p className="font-sans text-sm sm:text-base text-[#6E655A] max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const buttonId = `faq-btn-${index}`;
          const panelId = `faq-panel-${index}`;

          return (
            <div
              key={faq.question}
              className="rounded-2xl border border-[#E2D6C3] bg-white transition-colors duration-200 overflow-hidden shadow-xs"
            >
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4D2E]"
              >
                <span className="font-sans text-base sm:text-lg font-bold text-[#1F1B16] leading-snug">
                  {faq.question}
                </span>
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-300 ${
                    isOpen
                      ? "bg-[#FF4D2E] text-white border-[#FF4D2E] rotate-180"
                      : "bg-[#FAF7F2] text-[#6E655A] border-[#E2D6C3]"
                  }`}
                >
                  <ChevronDown className="w-4 h-4" aria-hidden="true" />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#574E43] leading-relaxed border-t border-[#F2ECE1]">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
