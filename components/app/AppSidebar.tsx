"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, LogOut } from "lucide-react";
import EcrivanceLogo from "../brand/EcrivanceLogo";
import { APP_NAV_ITEMS, getActiveNavId } from "../../lib/app-nav";

type AppSidebarProps = {
  onNavigate?: () => void;
};

export function AppSidebar({ onNavigate }: AppSidebarProps) {
  const pathname = usePathname();
  const activeId = getActiveNavId(pathname);

  return (
    <aside className="flex h-full w-60 shrink-0 flex-col border-r border-gray-200 bg-white/90 backdrop-blur-md">
      <div className="border-b border-gray-100 px-6 py-5">
        <EcrivanceLogo height={20} />
        <p className="mt-1 text-xs text-gray-500">TCF Writing Practice</p>
      </div>

      <nav className="flex-1 space-y-1 p-3">
        {APP_NAV_ITEMS.map(({ id, label, href, icon: Icon }) => {
          const active = id === activeId;
          return (
            <Link
              key={id}
              href={href}
              onClick={onNavigate}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                active
                  ? "bg-blue-50 text-brand-navy"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" aria-hidden />
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="space-y-1 border-t border-gray-100 p-3">
        <Link
          href="/"
          onClick={onNavigate}
          className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Back to Home
        </Link>

        <div className="flex items-center gap-3 rounded-xl px-3 py-2">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-navy text-sm font-semibold text-white">
            M
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-gray-900">Michael</p>
            <p className="text-xs text-gray-500">Free Plan</p>
          </div>
        </div>

        <Link
          href="/signin"
          onClick={onNavigate}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50"
        >
          <LogOut className="h-4 w-4" aria-hidden />
          Sign out
        </Link>
      </div>
    </aside>
  );
}
