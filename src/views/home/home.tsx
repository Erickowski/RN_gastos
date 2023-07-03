import { View, Alert } from "react-native";

import { Header, NewBudget } from "@src/components";

import styles from "./styles";

export function Home() {
  const handleSetBudget = (budget: string) => {
    if (Number(budget) > 0) {
      console.log(budget);
    } else {
      Alert.alert("Error", "El presupuesto no puede ser 0 o menor");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <NewBudget onSetBudget={handleSetBudget} />
      </View>
    </View>
  );
}
