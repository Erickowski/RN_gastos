import { View, Image } from "react-native";

import styles from "./styles";

export const ControlBudget = () => {
  return (
    <View style={styles.container}>
      <View style={styles.graphCenter}>
        <Image
          source={require("@src/assets/img/grafico.jpg")}
          style={styles.image}
        />
      </View>
    </View>
  );
};
