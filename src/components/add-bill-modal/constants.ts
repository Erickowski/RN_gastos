import { CATEGORIES } from "@src/types";

export const PICKER_ITEMS = [
  { label: "-- Seleccione --", value: CATEGORIES.empty },
  {
    label: "Ahorro",
    value: CATEGORIES.savings,
  },
  {
    label: "Comida",
    value: CATEGORIES.food,
  },
  {
    label: "Casa",
    value: CATEGORIES.house,
  },
  {
    label: "Gastos Varios",
    value: CATEGORIES.spends,
  },
  {
    label: "Ocio",
    value: CATEGORIES.entertainment,
  },
  {
    label: "Salud",
    value: CATEGORIES.health,
  },
  {
    label: "Suscripciones",
    value: CATEGORIES.subscriptions,
  },
];
