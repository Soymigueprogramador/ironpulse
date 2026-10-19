import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
}

function Button({
  children,
  variant = "primary",
  className = "",
  href,
  ...props
}: ButtonProps) {
  const base_classes =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-colors";

  const variant_classes =
    variant === "primary"
      ? "bg-violet-600 text-white hover:bg-violet-500"
      : "border border-slate-700 text-white hover:bg-slate-800";

  const button_classes = `${base_classes} ${variant_classes} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={button_classes}
        target={href.startsWith("https://wa.me/") ? "_blank" : undefined}
        rel={
          href.startsWith("https://wa.me/")
            ? "noopener noreferrer"
            : undefined
        }
      >
        {children}
      </a>
    );
  }

  return (
    <button className={button_classes} {...props}>
      {children}
    </button>
  );
}

export default Button;