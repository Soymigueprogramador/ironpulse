import type { ReactNode } from "react"

interface PageSectionProps {
  children: ReactNode
  className?: string
}

function PageSection({ children, className = "" }: PageSectionProps) {
  return (
    <section className={`py-24 ${className}`}>
      {children}
    </section>
  )
}

export default PageSection