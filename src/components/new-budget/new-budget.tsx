import { Text, Pressable, View, TextInput } from "react-native";

import styles from "./styles";

export const NewBudget = () => {
  return (
    <View style={styles.container}>
      <Text>Nuevo presupuesto</Text>
      <TextInput />

      <Pressable>
        <Text>Definir presupuesto</Text>
      </Pressable>
    </View>
  );
};
