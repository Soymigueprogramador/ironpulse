import Container from "../common/Container"
import SectionTitle from "../common/SectionTitle"
import PageSection from "../layout/PageSection"
import { schedule } from "../../data/schedule"

function Schedule() {
return ( <PageSection id="horarios"> <Container> <SectionTitle
       eyebrow="Horarios"
       title="Organizá tus entrenamientos"
       description="Consultá nuestros horarios y encontrá el momento ideal para entrenar."
     />

```
    <div className="grid w-full min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
      {schedule.map((item) => {
        const isClosed = item.time === "Cerrado"

        return (
          <article
            key={item.id}
            className={`group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border p-4 transition-all duration-300 sm:p-5 ${
              isClosed
                ? "border-slate-800 bg-slate-900/40"
                : "border-slate-800 bg-slate-900/70 hover:-translate-y-1 hover:border-violet-500/60 hover:bg-slate-900"
            }`}
          >
            {!isClosed && (
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet-600 to-violet-400 opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
            )}

            <div className="mb-5 flex min-w-0 flex-wrap items-center justify-between gap-3 sm:mb-6">
              <h3
                className={`min-w-0 break-words text-lg font-bold tracking-tight sm:text-xl ${
                  isClosed ? "text-slate-400" : "text-white"
                }`}
              >
                {item.day}
              </h3>

              <span
                className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
                  isClosed
                    ? "bg-slate-800 text-slate-400"
                    : "border border-violet-500/20 bg-violet-500/10 text-violet-300"
                }`}
              >
                {isClosed ? "Cerrado" : "Abierto"}
              </span>
            </div>

            {isClosed ? (
              <div className="flex min-w-0 flex-1 flex-col justify-center border-t border-slate-800 pt-5">
                <p className="break-words text-sm leading-relaxed text-slate-400">
                  No hay actividad programada.
                </p>
              </div>
            ) : (
              <div className="flex min-w-0 flex-1 flex-col gap-5">
                <div className="min-w-0">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Horario del gimnasio
                  </p>

                  <p className="break-words text-sm font-medium text-slate-200 sm:text-base">
                    {item.opening_time} a {item.closing_time}
                  </p>
                </div>

                <div className="min-w-0 rounded-xl border border-violet-500/20 bg-violet-500/5 p-3 sm:p-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-violet-300/70">
                    Franja de entrenamiento
                  </p>

                  <p className="break-words text-lg font-bold tracking-tight text-violet-300 sm:text-xl">
                    {item.time}
                  </p>
                </div>

                <div className="min-w-0">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Actividad
                  </p>

                  <p className="break-words text-sm font-semibold leading-relaxed text-white">
                    {item.activity ?? "Sin actividad asignada"}
                  </p>
                </div>

                <div className="mt-auto min-w-0 border-t border-slate-800 pt-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Entrenador
                  </p>

                  <p className="break-words text-sm leading-relaxed text-slate-300">
                    {item.trainer ?? "Sin entrenador asignado"}
                  </p>
                </div>
              </div>
            )}
          </article>
        )
      })}
    </div>
  </Container>
</PageSection>

)
}

export default Schedule
