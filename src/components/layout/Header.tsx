import { useState } from "react"
import Container from "../common/Container"
import Button from "../common/Button"

function Header() {
  const [menu_open, set_menu_open] = useState(false)

  const close_menu = () => {
    set_menu_open(false)
  }

  const navigation_links = [
    { label: "Nosotros", href: "#nosotros" },
    { label: "Servicios", href: "#servicios" },
    { label: "Planes", href: "#planes" },
    { label: "Entrenadores", href: "#entrenadores" },
    { label: "Horarios", href: "#horarios" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Ubicación", href: "#ubicacion" },
    { label: "Contacto", href: "#contacto" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <a
            href="#inicio"
            className="text-xl font-bold tracking-tight text-white"
            onClick={close_menu}
          >
            IRON<span className="text-violet-500">PULSE</span>
          </a>

          <nav className="hidden items-center gap-5 xl:flex">
            {navigation_links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <Button href="#planes">Comenzar ahora</Button>
          </nav>

          <button
            type="button"
            className="rounded-md border border-slate-700 px-3 py-2 text-sm text-white xl:hidden"
            onClick={() => set_menu_open(!menu_open)}
            aria-label={menu_open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menu_open}
          >
            {menu_open ? "Cerrar" : "Menú"}
          </button>
        </div>

        {menu_open && (
          <nav className="border-t border-slate-800 py-4 xl:hidden">
            <div className="flex flex-col gap-4">
              {navigation_links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                  onClick={close_menu}
                >
                  {link.label}
                </a>
              ))}

              <Button href="#planes">Comenzar ahora</Button>
            </div>
          </nav>
        )}
      </Container>
    </header>
  )
}

export default Header