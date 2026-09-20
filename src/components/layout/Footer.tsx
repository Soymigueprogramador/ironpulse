import Container from "../common/Container"

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-3">
          <div>
            <a
              href="#inicio"
              className="text-xl font-bold tracking-tight text-white"
            >
              IRON<span className="text-violet-500">PULSE</span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              Un espacio diseñado para ayudarte a entrenar más fuerte,
              superar tus límites y alcanzar tus objetivos.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navegación
            </h3>

            <nav className="mt-4 flex flex-col gap-3">
              <a
                href="#servicios"
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                Servicios
              </a>

              <a
                href="#planes"
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                Planes
              </a>

              <a
                href="#entrenadores"
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                Entrenadores
              </a>

              <a
                href="#horarios"
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                Horarios
              </a>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contacto
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
              <span>Buenos Aires, Argentina</span>
              <span>+54 11 1234-5678</span>
              <span>contacto@ironpulse.com</span>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 py-6">
          <p className="text-center text-sm text-slate-500">
            © {new Date().getFullYear()} IRONPULSE. Todos los derechos
            reservados.
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer