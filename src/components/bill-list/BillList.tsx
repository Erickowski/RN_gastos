import { Text, View } from "react-native";

import { BillsType } from "@src/types";
import { Bill } from "@src/components";

import styles from "./styles";

type Props = { bills: BillsType };

export const BillList = ({ bills }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gastos</Text>
      {bills.length ? (
        bills.map((bill) => <Bill key={bill.id} bill={bill} />)
      ) : (
        <Text style={styles.noBills}>No hay gastos</Text>
      )}
    </View>
  );
};
