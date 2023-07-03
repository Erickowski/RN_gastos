import { useState } from "react";
import { View, Alert } from "react-native";

import { Header, NewBudget, ControlBudget } from "@src/components";

import styles from "./styles";

export function Home() {
  const [budget, setBudget] = useState<string>("");
  const [showControlBudget, setShowControlBudget] = useState<boolean>(false);

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
          <ControlBudget budgetValue={budget} />
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
