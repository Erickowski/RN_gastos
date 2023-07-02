import { View } from "react-native";

import { Header, NewBudget } from "@src/components";

import styles from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <NewBudget />
      </View>
    </View>
  );
}
