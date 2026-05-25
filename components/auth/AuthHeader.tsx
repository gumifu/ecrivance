import Link from "next/link";
import { Home } from "lucide-react";
import EcrivanceLogo from "../brand/EcrivanceLogo";

export function AuthHeader() {
  return (
    <header className="relative z-20 shrink-0 border-b border-brand-navy/10 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/">
          <EcrivanceLogo height={22} />
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-brand-navy"
        >
          <Home className="h-4 w-4" aria-hidden />
          Home
        </Link>
      </div>
    </header>
  );
}
