import type { ButtonHTMLAttributes, ReactNode } from "react";

// Define las propiedades que puede recibir nuestro componente Button.
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // Contenido que aparecerá dentro del botón.
  children: ReactNode;

  // Define el estilo visual del botón.
  variant?: "primary" | "secondary";

  // Permite utilizar el componente como enlace.
  href?: string;
}

function Button({
  children,
  variant = "primary",
  className = "",
  href,
  // Permite que nuestro componente siga aceptando las propiedades de un botón HTML normal.
  ...props
}: ButtonProps) {
  // Clases CSS compartidas por ambas variantes.
  const base_classes =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-colors";

  // Clases CSS específicas según la variante elegida.
  const variant_classes =
    variant === "primary"
      ? "bg-violet-600 text-white hover:bg-violet-500"
      : "border border-slate-700 text-white hover:bg-slate-800";

  // Une todas las clases CSS del componente.
  const button_classes = `${base_classes} ${variant_classes} ${className}`;

  // Si existe href, renderizamos un enlace.
  if (href) {
    return (
      <a href={href} className={button_classes}>
        {children}
      </a>
    );
  }

  // Si no existe href, mantenemos el comportamiento original de botón.
  return (
    <button className={button_classes} {...props}>
      {children}
    </button>
  );
}

export default Button;