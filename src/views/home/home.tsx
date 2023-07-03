import { useState } from "react";
import { View, Alert } from "react-native";

import { BillType } from "@src/types";
import { Header, NewBudget, ControlBudget } from "@src/components";

import styles from "./styles";

export function Home() {
  const [budget, setBudget] = useState<string>("");
  const [showControlBudget, setShowControlBudget] = useState<boolean>(false);
  const [bills, setBills] = useState<BillType>([
    {
      id: "1",
      value: 30,
    },
    {
      id: "2",
      value: 20,
    },
    {
      id: "3",
      value: 50,
    },
  ]);

  const handleValidateBudget = () => {
    if (Number(budget) > 0) {
      setShowControlBudget(true);
    } else {
      Alert.alert("Error", "El presupuesto no puede ser 0 o menor");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        {showControlBudget ? (
          <ControlBudget budgetValue={budget} bills={bills} />
        ) : (
          <NewBudget
            budgetValue={budget}
            onSetBudget={setBudget}
            onValidateBudget={handleValidateBudget}
          />
        )}
      </View>
    </View>
  );
}
