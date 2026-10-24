import type { Testimonial } from "../../types/testimonial";

interface TestimonialCardProps {
testimonial: Testimonial;
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
const initials = testimonial.name
.split(" ")
.map((part) => part[0])
.slice(0, 2)
.join("")
.toUpperCase();

return ( <article className="rounded-xl border border-slate-800 bg-slate-950 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50 motion-reduce:transform-none motion-reduce:transition-none">
<div
className="flex gap-1 text-violet-500"
role="img"
aria-label={`Valoración: ${testimonial.rating} de 5 estrellas`}
> <span aria-hidden="true">
{"★".repeat(testimonial.rating)}
{"☆".repeat(5 - testimonial.rating)} </span> </div>


  <blockquote className="mt-5 text-slate-300">
    “{testimonial.text}”
  </blockquote>

  <div className="mt-6 flex items-center gap-4 border-t border-slate-800 pt-5">
    <div
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-violet-500/40 bg-violet-500/10 text-sm font-semibold text-violet-400"
      role="img"
      aria-label={`Avatar de ${testimonial.name}`}
    >
      {initials}
    </div>

    <div>
      <p className="font-semibold text-white">{testimonial.name}</p>
      <p className="mt-1 text-sm text-slate-500">Socio IRONPULSE</p>
    </div>
  </div>
</article>


);
}

export default TestimonialCard;
