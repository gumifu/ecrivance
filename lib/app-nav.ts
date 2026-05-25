import type { LucideIcon } from "lucide-react";
import {
  CreditCard,
  History,
  LayoutDashboard,
  PenLine,
  Settings
} from "lucide-react";

export type AppNavId = "new-practice" | "dashboard" | "history" | "billing" | "settings";

export type AppNavItem = {
  id: AppNavId;
  label: string;
  href: string;
  icon: LucideIcon;
};

export const APP_NAV_ITEMS: AppNavItem[] = [
  { id: "new-practice", label: "New Practice", href: "/app", icon: PenLine },
  { id: "dashboard", label: "Dashboard", href: "/app/dashboard", icon: LayoutDashboard },
  { id: "history", label: "History", href: "/app/history", icon: History },
  { id: "billing", label: "Billing", href: "/app/billing", icon: CreditCard },
  { id: "settings", label: "Settings", href: "/app/settings", icon: Settings }
];

export function getActiveNavId(pathname: string): AppNavId {
  if (pathname.startsWith("/app/dashboard")) return "dashboard";
  if (pathname.startsWith("/app/history")) return "history";
  if (pathname.startsWith("/app/billing")) return "billing";
  if (pathname.startsWith("/app/settings")) return "settings";
  return "new-practice";
}
