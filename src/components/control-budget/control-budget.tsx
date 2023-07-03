import { useState, useEffect } from "react";
import { Text, View, Image } from "react-native";

import { BillType } from "@src/types";
import { formatNumber } from "@src/utils";

import styles from "./styles";

type Props = {
  budgetValue: string;
  bills: BillType;
};

export const ControlBudget = ({ budgetValue, bills }: Props) => {
  const [available, setAvailable] = useState(0);
  const [spent, setSpent] = useState(0);

  useEffect(() => {
    const totalBill = bills.reduce(
      (total, bill) => Number(bill.value) + total,
      0
    );

    setAvailable(Number(budgetValue) - totalBill);
    setSpent(totalBill);
  }, []);

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
          {formatNumber(available)}
        </Text>

        <Text style={styles.value}>
          <Text style={styles.label}>Gastado:</Text> {formatNumber(spent)}
        </Text>
      </View>
    </View>
  );
};
