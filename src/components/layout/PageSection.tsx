import type { ComponentPropsWithoutRef } from "react"

interface PageSectionProps extends ComponentPropsWithoutRef<"section"> {
  children: React.ReactNode
}

function PageSection({
  children,
  className = "",
  ...props
}: PageSectionProps) {
  return (
    <section
      className={`py-24 ${className}`}
      {...props}
    >
      {children}
    </section>
  )
}

export default PageSection