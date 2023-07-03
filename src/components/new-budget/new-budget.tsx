import { Text, Pressable, View, TextInput } from "react-native";

import styles from "./styles";

export const NewBudget = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nuevo presupuesto</Text>

      <TextInput
        keyboardType="numeric"
        placeholder="Agrega tu presupuesto: Ej. 300"
        style={styles.input}
      />

      <Pressable style={styles.button}>
        <Text style={styles.textButton}>Agregar presupuesto</Text>
      </Pressable>
    </View>
  );
};
