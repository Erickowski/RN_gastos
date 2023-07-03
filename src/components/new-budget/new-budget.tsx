import { Text, Pressable, View, TextInput } from "react-native";
import { useState } from "react";

import styles from "./styles";

type Props = {
  onSetBudget: (budget: string) => void;
};

export const NewBudget = ({ onSetBudget }: Props) => {
  const [budget, setBudget] = useState<string>("");

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nuevo presupuesto</Text>

      <TextInput
        keyboardType="numeric"
        placeholder="Agrega tu presupuesto: Ej. 300"
        style={styles.input}
        value={budget}
        onChangeText={setBudget}
      />

      <Pressable style={styles.button} onPress={() => onSetBudget(budget)}>
        <Text style={styles.textButton}>Agregar presupuesto</Text>
      </Pressable>
    </View>
  );
};
