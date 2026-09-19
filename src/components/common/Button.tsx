import type { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: "primary" | "secondary"
}

function Button({
  children,
  variant = "primary",
  className = "",
  // Permite que nuestro componente siga acceptando las propiedades de un boton HTML normal. 
  ...props
}: ButtonProps) {
  const base_classes =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-colors"

  const variant_classes =
    variant === "primary"
      ? "bg-violet-600 text-white hover:bg-violet-500"
      : "border border-slate-700 text-white hover:bg-slate-800"

  const button_classes = `${base_classes} ${variant_classes} ${className}`

  return (
    <button className={button_classes} {...props}>
      {children}
    </button>
  )
}

export default Button

