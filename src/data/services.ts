import type { Service } from "../types/service";

export const services: Service[] = [
  {
    id: "musculacion",
    name: "Musculación",
    description:
      "Entrenamiento de fuerza para desarrollar masa muscular y mejorar tu rendimiento.",
    icon: "Dumbbell",
  },
  {
    id: "cardio",
    name: "Cardio",
    description:
      "Entrenamientos cardiovasculares para mejorar tu resistencia y condición física.",
    icon: "HeartPulse",
  },
  {
    id: "entrenamiento-funcional",
    name: "Entrenamiento funcional",
    description:
      "Ejercicios dinámicos para mejorar fuerza, movilidad, coordinación y rendimiento.",
    icon: "Activity",
  },
  {
    id: "entrenamiento-personal",
    name: "Entrenamiento personal",
    description:
      "Planes personalizados y seguimiento individual para alcanzar tus objetivos de entrenamiento.",
    icon: "PersonStanding",
  },
  {
    id: "clases-grupales",
    name: "Clases grupales",
    description:
      "Sesiones dinámicas para entrenar acompañado, mantener la motivación y disfrutar del ejercicio.",
    icon: "Zap",
  },
  {
    id: "movilidad-flexibilidad",
    name: "Movilidad y flexibilidad",
    description:
      "Ejercicios enfocados en mejorar tu movilidad, flexibilidad y calidad de movimiento.",
    icon: "Target",
  },
];
