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

      <View style={styles.textContainer}>
        <Text style={styles.value}>
          <Text style={styles.label}>Presupuesto:</Text>{" "}
          {formatNumber(budgetValue)}
        </Text>

        <Text style={styles.value}>
          <Text style={styles.label}>Disponible:</Text>{" "}
          {formatNumber(budgetValue)}
        </Text>

        <Text style={styles.value}>
          <Text style={styles.label}>Gastado:</Text> {formatNumber(budgetValue)}
        </Text>
      </View>
    </View>
  );
};
