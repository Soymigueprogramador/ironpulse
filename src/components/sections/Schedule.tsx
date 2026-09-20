import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import PageSection from "../layout/PageSection";
import { schedule } from "../../data/schedule";

function Schedule() {
  return (
    <PageSection id="horarios">
      <Container>
        <SectionTitle
          eyebrow="Horarios"
          title="Organizá tus entrenamientos"
          description="Consultá nuestros horarios y encontrá el momento ideal para entrenar."
        />

        <div className="overflow-hidden rounded-xl border border-slate-800">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                    Día
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                    Horario
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                    Actividad
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                    Entrenador
                  </th>
                </tr>
              </thead>

              <tbody>
                {schedule.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-slate-800 last:border-b-0 hover:bg-slate-900/50"
                  >
                    <td className="px-6 py-4 text-sm text-slate-300">
                      {item.day}
                    </td>

                    <td className="px-6 py-4 text-sm text-slate-300">
                      {item.time}
                    </td>

                    <td className="px-6 py-4 text-sm font-medium text-white">
                      {item.acivitty}
                    </td>

                    <td className="px-6 py-4 text-sm text-slate-400">
                      {item.trainer}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </PageSection>
  );
}

export default Schedule;