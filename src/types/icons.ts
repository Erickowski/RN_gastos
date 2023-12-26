import { ImageSourcePropType } from "react-native";

import { CATEGORIES } from "./categories";

export const ICONS: { [key: string]: ImageSourcePropType } = {
  [CATEGORIES.entertainment]: require("@src/assets/img/icono_ocio.png"),
  [CATEGORIES.food]: require("@src/assets/img/icono_comida.png"),
  [CATEGORIES.health]: require("@src/assets/img/icono_salud.png"),
  [CATEGORIES.house]: require("@src/assets/img/icono_casa.png"),
  [CATEGORIES.savings]: require("@src/assets/img/icono_ahorro.png"),
  [CATEGORIES.spends]: require("@src/assets/img/icono_gastos.png"),
  [CATEGORIES.subscriptions]: require("@src/assets/img/icono_suscripciones.png"),
};
