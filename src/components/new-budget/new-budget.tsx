import { Dispatch, SetStateAction } from "react";
import { Text, Pressable, View, TextInput } from "react-native";

import styles from "./styles";

type Props = {
  budgetValue: string;
  onSetBudget: Dispatch<SetStateAction<string>>;
  onValidateBudget: () => void;
};

export const NewBudget = ({
  budgetValue,
  onSetBudget,
  onValidateBudget,
}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nuevo presupuesto</Text>

      <TextInput
        keyboardType="numeric"
        placeholder="Agrega tu presupuesto: Ej. 300"
        style={styles.input}
        value={budgetValue}
        onChangeText={onSetBudget}
      />

      <Pressable style={styles.button} onPress={onValidateBudget}>
        <Text style={styles.textButton}>Agregar presupuesto</Text>
      </Pressable>
    </View>
  );
};
