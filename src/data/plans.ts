import type { Plan } from "../types/plan";

export const plans: Plan[] = [
    {
    id: "basico",
    name: "Básico",
    price: 25000,
    features: [
      "Acceso al área de musculación",
      "Acceso de lunes a viernes",
    ],
    highlighted: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: 35000,
    features: [
      "Acceso ilimitado",
      "Todas las áreas del gimnasio",
      "Clases grupales",
    ],
    highlighted: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: 45000,
    features: [
      "Acceso ilimitado",
      "Todas las áreas del gimnasio",
      "Clases grupales",
      "Seguimiento personalizado",
    ],
    highlighted: false,
  },
]