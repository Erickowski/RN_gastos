import { useState } from "react";
import { View, Alert } from "react-native";

import { Header, NewBudget, ControlBudget } from "@src/components";

import styles from "./styles";

export function Home() {
  const [showControlBudget, setShowControlBudget] = useState<boolean>(false);

  const handleSetBudget = (budget: string) => {
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
          <ControlBudget />
        ) : (
          <NewBudget onSetBudget={handleSetBudget} />
        )}
      </View>
    </View>
  );
}
