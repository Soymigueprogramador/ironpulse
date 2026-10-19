import type { Plan } from "../../types/plan";
import { contact } from "../../data/contact";
import Button from "./Button";

interface PlanCardProps {
  plan: Plan;
}

function PlanCard({ plan }: PlanCardProps) {
  const whatsapp_message = encodeURIComponent(
    `Hola, quiero consultar sobre el plan ${plan.name} de $${plan.price.toLocaleString("es-AR")} por mes.`
  );

  const whatsapp_url = `https://wa.me/${contact.whatsappNumber}?text=${whatsapp_message}`;

  return (
    <article
      className={`relative flex flex-col rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
        plan.highlighted
          ? "border-violet-500 bg-slate-900 shadow-lg shadow-violet-500/10 hover:border-violet-400 md:scale-105"
          : "border-slate-800 bg-slate-950 hover:border-violet-500/50"
      }`}
    >
      {plan.highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-violet-600 px-4 py-1 text-xs font-bold tracking-wide text-white">
          MÁS ELEGIDO
        </span>
      )}

      <h3 className="text-xl font-semibold text-white">{plan.name}</h3>

      <p className="mt-3 text-slate-400">{plan.description}</p>

      <div className="mt-6">
        <span className="text-3xl font-bold text-white">
          ${plan.price.toLocaleString("es-AR")}
        </span>
        <span className="ml-2 text-sm text-slate-500">/ mes</span>
      </div>

      <ul className="mt-6 flex flex-1 flex-col gap-3">
        {plan.features.map((feature) => (
          <li key={feature} className="text-sm text-slate-300">
            ✓ {feature}
          </li>
        ))}
      </ul>

      <Button
        href={whatsapp_url}
        className="mt-8 w-full"
      >
        Elegir plan
      </Button>
    </article>
  );
}

export default PlanCard;

