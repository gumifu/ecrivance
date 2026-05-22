import { ArrowRight } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "secondary-gray" | "accent" | "disabled";

const variantClass: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  "secondary-gray": "btn-secondary-gray",
  accent: "btn-accent",
  disabled: "btn-disabled"
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: "default" | "sm";
  showIcon?: boolean;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "default",
  showIcon = false,
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const isDisabled = variant === "disabled" || disabled;
  const base =
    size === "sm" && variant === "primary"
      ? "btn-primary-sm"
      : variantClass[isDisabled ? "disabled" : variant];

  return (
    <button
      type="button"
      className={`${base} ${className}`.trim()}
      disabled={isDisabled}
      {...props}
    >
      {children}
      {showIcon && variant === "primary" && !isDisabled ? (
        <ArrowRight className="h-5 w-5" aria-hidden />
      ) : null}
    </button>
  );
}
