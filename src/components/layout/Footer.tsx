import { Mail, Phone } from "lucide-react";
import Container from "../common/Container";
import { contact } from "../../data/contact";

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
              Un espacio diseñado para ayudarte a entrenar más fuerte, superar
              tus límites y alcanzar tus objetivos.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navegación
            </h3>

            <nav className="mt-4 flex flex-col gap-3">
              <a href="#nosotros" className="text-sm text-slate-400 transition-colors hover:text-white">
                Nosotros
              </a>

              <a href="#servicios" className="text-sm text-slate-400 transition-colors hover:text-white">
                Servicios
              </a>

              <a href="#planes" className="text-sm text-slate-400 transition-colors hover:text-white">
                Planes
              </a>

              <a href="#entrenadores" className="text-sm text-slate-400 transition-colors hover:text-white">
                Entrenadores
              </a>

              <a href="#horarios" className="text-sm text-slate-400 transition-colors hover:text-white">
                Horarios
              </a>

              <a href="#testimonios" className="text-sm text-slate-400 transition-colors hover:text-white">
                Testimonios
              </a>

              <a href="#ubicacion" className="text-sm text-slate-400 transition-colors hover:text-white">
                Ubicación
              </a>

              <a href="#contacto" className="text-sm text-slate-400 transition-colors hover:text-white">
                Contacto
              </a>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contacto
            </h3>

            <div className="mt-5 flex items-center gap-3">
              <a
                href={`tel:${contact.phoneDisplay.replace(/\s/g, "")}`}
                aria-label="Llamar por teléfono"
                title="Teléfono"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-violet-400 transition-all hover:border-violet-500 hover:bg-violet-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <Phone size={19} aria-hidden="true" />
              </a>

              <a
                href={`mailto:${contact.email}`}
                aria-label="Enviar correo electrónico"
                title="Correo electrónico"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-violet-400 transition-all hover:border-violet-500 hover:bg-violet-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <Mail size={19} aria-hidden="true" />
              </a>

              <a
                href={`https://wa.me/${contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp"
                title="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-violet-400 transition-all hover:border-violet-500 hover:bg-violet-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <svg
                  viewBox="0 0 448 512"
                  className="h-[19px] w-[19px] fill-current"
                  aria-hidden="true"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.8 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-800 py-6 text-center sm:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} IRONPULSE. Todos los derechos
            reservados.
          </p>

          <a
            href="https://nuevo-portfolio.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 transition-colors hover:text-violet-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Conocé al desarrollador
            <span className="ml-1 text-violet-500">↗</span>
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;