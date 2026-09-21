import { useState } from "react"

import Container from "../common/Container"

import Button from "../common/Button"

function Header() {
  const [menu_open, set_menu_open] = useState(false)

  const close_menu = () => {
    set_menu_open(false)
  }

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

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#servicios"
              className="text-sm text-slate-300 transition-colors hover:text-white"
            >
              Servicios
            </a>

            <a
              href="#planes"
              className="text-sm text-slate-300 transition-colors hover:text-white"
            >
              Planes
            </a>

            <a
              href="#entrenadores"
              className="text-sm text-slate-300 transition-colors hover:text-white"
            >
              Entrenadores
            </a>

            <a
              href="#horarios"
              className="text-sm text-slate-300 transition-colors hover:text-white"
            >
              Horarios
            </a>

            <Button href="#planes">Comenzar ahora</Button>
          </nav>

          <button
            type="button"
            className="rounded-md border border-slate-700 px-3 py-2 text-sm text-white md:hidden"
            onClick={() => set_menu_open(!menu_open)}
            aria-label={menu_open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menu_open}
          >
            {menu_open ? "Cerrar" : "Menú"}
          </button>
        </div>

        {menu_open && (
          <nav className="border-t border-slate-800 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <a
                href="#servicios"
                className="text-sm text-slate-300 hover:text-white"
                onClick={close_menu}
              >
                Servicios
              </a>

              <a
                href="#planes"
                className="text-sm text-slate-300 hover:text-white"
                onClick={close_menu}
              >
                Planes
              </a>

              <a
                href="#entrenadores"
                className="text-sm text-slate-300 hover:text-white"
                onClick={close_menu}
              >
                Entrenadores
              </a>

              <a
                href="#horarios"
                className="text-sm text-slate-300 hover:text-white"
                onClick={close_menu}
              >
                Horarios
              </a>

              <Button href="#planes">Comenzar ahora</Button>
            </div>
          </nav>
        )}
      </Container>
    </header>
  )
}

export default Header