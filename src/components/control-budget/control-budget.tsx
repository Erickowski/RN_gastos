import { useState, useEffect, useMemo } from "react";
import { Text, View, Pressable } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

import { BillsType } from "@src/types";
import { formatNumber, formatPercentage } from "@src/utils";
import { COLORS } from "@src/styles";

import styles from "./styles";

type Props = {
  budgetValue: string;
  bills: BillsType;
  onReset: () => void;
};

export const ControlBudget = ({ budgetValue, bills, onReset }: Props) => {
  const [available, setAvailable] = useState(0);
  const [spent, setSpent] = useState(0);

  useEffect(() => {
    const totalBill = bills.reduce(
      (total, bill) => Number(bill.amount) + total,
      0
    );

    setAvailable(Number(budgetValue) - totalBill);
    setSpent(totalBill);
  }, [bills]);

  const fillValue = useMemo(() => {
    return Number(formatPercentage(available, Number(budgetValue)));
  }, [available]);

  return (
    <View style={styles.container}>
      <View style={styles.graphCenter}>
        <AnimatedCircularProgress
          size={200}
          width={15}
          fill={fillValue}
          tintColor={COLORS.blueberry}
          backgroundColor={COLORS.slateGray}
          duration={1250}
        >
          {(fill) => (
            <>
              <Text style={styles.circularTitle}>{fill.toFixed(0)} %</Text>
              <Text style={styles.circularSubtitle}>Gastado</Text>
            </>
          )}
        </AnimatedCircularProgress>
      </View>

      <View style={styles.textContainer}>
        <Pressable style={styles.button} onLongPress={onReset}>
          <Text style={styles.buttonText}>Reiniciar app</Text>
        </Pressable>
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
