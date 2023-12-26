import { Text, View } from "react-native";

import { Bill as BillType } from "@src/types";

import styles from "./styles";

type Props = {
  bill: BillType;
};

export const Bill = ({ bill }: Props) => {
  return (
    <View style={styles.container}>
      <Text>{bill.name}</Text>
    </View>
  );
};
