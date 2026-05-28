"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const SHARE_URL = "https://ecrivance.vercel.app/";

export function LandingShareChat() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: MouseEvent | TouchEvent) {
      const target = event.target as Node;
      if (panelRef.current?.contains(target)) return;
      setOpen(false);
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <div ref={panelRef} className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="w-[min(100vw-2.5rem,320px)] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl"
            role="dialog"
            aria-label="Share Écrivance"
          >
            <div className="border-b border-gray-100 bg-blue-50/80 px-4 py-3">
              <p className="text-sm font-semibold text-gray-900">Share Écrivance</p>
              <p className="mt-0.5 text-xs text-gray-500">Demo — scan or copy the link</p>
            </div>
            <div className="flex flex-col items-center gap-4 p-4">
              <div className="overflow-hidden rounded-xl border border-gray-100 bg-white p-2 shadow-sm">
                <Image
                  src="/share/ecrivance-share-qr.png"
                  alt="QR code for ecrivance.vercel.app"
                  width={200}
                  height={200}
                  className="h-auto w-[min(72vw,200px)]"
                />
              </div>
              <a
                href={SHARE_URL}
                target="_blank"
                rel="noreferrer"
                className="w-full break-all rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-center text-sm font-medium text-brand-navy transition hover:border-brand-navy/30 hover:bg-blue-50"
              >
                {SHARE_URL}
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-navy text-white shadow-lg transition hover:bg-brand-navy-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
        aria-expanded={open}
        aria-label={open ? "Close share panel" : "Open share panel"}
      >
        {open ? <X className="h-6 w-6" aria-hidden /> : <MessageCircle className="h-6 w-6" aria-hidden />}
      </button>
    </div>
  );
}
