import { Text, View, Image } from "react-native";

import { formatNumber } from "@src/utils";

import styles from "./styles";

type Props = {
  budgetValue: string;
};

export const ControlBudget = ({ budgetValue }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.graphCenter}>
        <Image
          source={require("@src/assets/img/grafico.jpg")}
          style={styles.image}
        />
      </View>

      <View>
        <Text>
          <Text>Presupuesto:</Text> {formatNumber(budgetValue)}
        </Text>

        <Text>
          <Text>Disponible:</Text> {formatNumber(budgetValue)}
        </Text>

        <Text>
          <Text>Gastado:</Text> {formatNumber(budgetValue)}
        </Text>
      </View>
    </View>
  );
};
