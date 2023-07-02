import { Text, SafeAreaView } from "react-native";

import styles from "./styles";

export const Header = () => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>Planificador de gastos</Text>
    </SafeAreaView>
  );
};
