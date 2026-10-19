import type { Plan } from "../types/plan";

export const plans: Plan[] = [
  {
    id: "basico",
    name: "Básico",
    price: 25000,
    description: "Lo esencial para empezar a entrenar.",
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
    description: "Más opciones para aprovechar tu entrenamiento.",
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
    description: "Una experiencia de entrenamiento más completa.",
    features: [
      "Acceso ilimitado",
      "Todas las áreas del gimnasio",
      "Clases grupales",
      "Seguimiento personalizado",
    ],
    highlighted: false,
  },
];