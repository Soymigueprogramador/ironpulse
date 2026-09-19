import type { ReactNode } from "react"

interface SectionTitleProps {
  title: string
  description?: string
  eyebrow?: string
  children?: ReactNode
}

function SectionTitle({
  title,
  description,
  eyebrow,
  children,
}: SectionTitleProps) {
  return (
    <div className="mb-12 max-w-3xl">
      {eyebrow && (
        <span className="mb-3 block text-sm font-semibold uppercase tracking-widest text-violet-500">
          {eyebrow}
        </span>
      )}

      <h2 className="text-white">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-slate-400">
          {description}
        </p>
      )}

      {children}
    </div>
  )
}

export default SectionTitle