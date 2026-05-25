import Link from "next/link";
import EcrivanceLogo from "../brand/EcrivanceLogo";

export function SiteFooter({ className = "" }: { className?: string }) {
  return (
    <footer
      className={`relative z-10 shrink-0 border-t border-gray-100 bg-white/90 px-6 py-10 backdrop-blur-sm ${className}`}
    >
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-4">
        <div>
          <EcrivanceLogo height={20} />
          <p className="mt-3 text-sm text-gray-400">
            TCF Canada Writing practice with instant AI feedback.
          </p>
        </div>
        {[
          { heading: "Product", links: ["How it works", "Pricing", "FAQ"] },
          { heading: "Resources", links: ["TCF Canada Guide", "Express Entry", "Blog"] },
          { heading: "Company", links: ["About", "Contact", "Privacy"] }
        ].map(({ heading, links }) => (
          <div key={heading}>
            <h4 className="text-sm font-semibold text-gray-700">{heading}</h4>
            <ul className="mt-3 space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-400 transition hover:text-gray-700">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-10 max-w-6xl border-t border-gray-100 pt-6 text-center text-xs text-gray-400">
        © 2026 Écrivance. All rights reserved.
      </p>
    </footer>
  );
}
