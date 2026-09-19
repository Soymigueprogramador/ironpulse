import type { Service } from "../types/service";

export const services: Service[] = [
  {
    id: "musculacion",
    name: "Musculación",
    description: "Entrenamiento de fuerza para desarrollar masa muscular y mejorar tu rendimiento.",
    icon: "Dumbbell",
  },
  {
    id: "cardio",
    name: "Cardio",
    description: "Entrenamientos cardiovasculares para mejorar tu resistencia y condición física.",
    icon: "HeartPulse",
  },
  {
    id: "entrenamiento-funcional",
    name: "Entrenamiento funcional",
    description: "Ejercicios dinámicos para mejorar fuerza, movilidad, coordinación y rendimiento.",
    icon: "Activity",
  },
]