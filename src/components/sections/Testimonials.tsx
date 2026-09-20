import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import PageSection from "../layout/PageSection";
import { testimonials } from "../../data/testimonials";

function Testimonials() {
  return (
    <PageSection id="testimonios" className="bg-slate-900/30">
      <Container>
        <SectionTitle
          eyebrow="Experiencias reales"
          title="Lo que dicen nuestros socios"
          description="Personas que eligieron IRONPULSE para entrenar, progresar y alcanzar sus objetivos."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="rounded-xl border border-slate-800 bg-slate-950 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50"
            >
              <div className="flex gap-1 text-violet-500">
                {"★".repeat(testimonial.rating)}
              </div>

              <blockquote className="mt-5 text-slate-300">
                “{testimonial.comment}”
              </blockquote>

              <div className="mt-6 border-t border-slate-800 pt-5">
                <p className="font-semibold text-white">{testimonial.name}</p>

                <p className="mt-1 text-sm text-slate-500">Socio IRONPULSE</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </PageSection>
  );
}

export default Testimonials;