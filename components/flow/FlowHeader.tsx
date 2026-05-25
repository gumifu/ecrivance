import Link from "next/link";
import EcrivanceLogo from "../brand/EcrivanceLogo";

export function FlowHeader() {
  return (
    <header className="relative z-20 shrink-0 border-b border-brand-navy/10 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/">
          <EcrivanceLogo height={22} />
        </Link>
        <Link
          href="/signup"
          className="text-sm font-medium text-gray-500 transition hover:text-brand-navy"
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
}
