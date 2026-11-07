import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import PageSection from "../layout/PageSection";
import { contact } from "../../data/contact";

const openingHours = [
  { day: "Lunes a viernes", hours: "07:00 a 22:00" },
  { day: "Sábados", hours: "09:00 a 18:00" },
  { day: "Domingos", hours: "Cerrado" },
];

const streets = [
  "left-0 top-[22%] h-3 w-full",
  "left-0 top-[48%] h-4 w-full",
  "left-0 top-[76%] h-3 w-full",
  "left-[20%] top-0 h-full w-3",
  "left-[48%] top-0 h-full w-4",
  "left-[76%] top-0 h-full w-3",
];

function Location() {
  return (
    <PageSection id="ubicacion">
      <Container>
        <SectionTitle
          eyebrow="Ubicación"
          title="Estamos cerca de vos"
          description="Conocé dónde estamos y consultá nuestros horarios de atención."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                <MapPin size={24} />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  Nuestra dirección
                </h3>
                <p className="text-sm text-slate-400">Dirección demostrativa</p>
              </div>
            </div>

            <p className="text-lg font-semibold leading-relaxed text-slate-200">
              {contact.address}
            </p>

            <p className="mt-2 text-sm text-slate-400">
              Ciudad Autónoma de Buenos Aires, Argentina
            </p>

            <div className="mt-6 rounded-xl border border-violet-500/20 bg-violet-500/5 p-4">
              <p className="text-sm leading-relaxed text-violet-300">
                Esta dirección es únicamente ilustrativa y no corresponde a una
                ubicación real del gimnasio.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                <Clock3 size={24} />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  Horarios de atención
                </h3>
                <p className="text-sm text-slate-400">Organizá tu visita</p>
              </div>
            </div>

            <div className="divide-y divide-slate-800">
              {openingHours.map((item) => (
                <div
                  key={item.day}
                  className="flex flex-wrap items-center justify-between gap-2 py-4 first:pt-0 last:pb-0"
                >
                  <span className="text-sm font-medium text-slate-300">
                    {item.day}
                  </span>

                  <span
                    className={`text-sm font-semibold ${
                      item.hours === "Cerrado"
                        ? "text-slate-500"
                        : "text-violet-300"
                    }`}
                  >
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 p-5 sm:p-6">
            <div>
              <h3 className="text-lg font-bold text-white">
                Explorá nuestra ubicación
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                Representación visual de nuestro entorno.
              </p>
            </div>

            <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-300">
              Mapa ilustrativo
            </span>
          </div>

          <div
            role="img"
            aria-label="Representación gráfica ilustrativa de calles y manzanas, sin ubicación geográfica real."
            className="relative h-64 overflow-hidden bg-slate-950 sm:h-80 lg:h-96"
          >
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-5 gap-3 p-3 sm:gap-5 sm:p-5">
              {Array.from({ length: 30 }, (_, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-slate-800/80 bg-slate-900/80"
                />
              ))}
            </div>

            {streets.map((street) => (
              <div
                key={street}
                className={`absolute z-10 bg-slate-800 ${street}`}
              />
            ))}

            <div className="absolute left-[48%] top-[48%] z-20 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-xl border border-violet-400/30 bg-slate-900 px-4 py-3 shadow-xl shadow-violet-950/30">
              <MapPin size={18} className="shrink-0 text-violet-400" />
              <span className="whitespace-nowrap text-sm font-semibold text-white">
                IRONPULSE
              </span>
            </div>

            <div className="absolute bottom-4 right-4 z-20 rounded-lg border border-slate-700 bg-slate-900/90 px-3 py-2">
              <p className="text-xs font-medium text-slate-400">
                Ubicación demostrativa
              </p>
            </div>
          </div>

          <div className="border-t border-slate-800 px-5 py-4 sm:px-6">
            <p className="text-center text-xs leading-relaxed text-slate-500">
              Este mapa es una representación gráfica ficticia y no indica una
              ubicación geográfica real.
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <a
            href={`tel:+${contact.whatsappNumber}`}
            className="group flex min-w-0 items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition-all duration-300 hover:border-violet-500/50 hover:bg-slate-900"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 transition-colors group-hover:bg-violet-500/20">
              <Phone size={21} />
            </div>

            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Teléfono
              </p>
              <p className="mt-1 break-words font-semibold text-white">
                {contact.phoneDisplay}
              </p>
            </div>
          </a>

          <a
            href={`mailto:${contact.email}`}
            className="group flex min-w-0 items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition-all duration-300 hover:border-violet-500/50 hover:bg-slate-900"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 transition-colors group-hover:bg-violet-500/20">
              <Mail size={21} />
            </div>

            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Correo electrónico
              </p>
              <p className="mt-1 break-words font-semibold text-white">
                {contact.email}
              </p>
            </div>
          </a>
        </div>
      </Container>
    </PageSection>
  );
}

export default Location;