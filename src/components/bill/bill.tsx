import { Image, Text, View } from "react-native";

import { BillType, ICONS } from "@src/types";
import { formatNumber } from "@src/utils";

import styles from "./styles";

type Props = {
  bill: BillType;
};

export const Bill = ({ bill }: Props) => {
  const { name, category, amount } = bill;
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Image source={ICONS[bill.category]} />
          <View>
            <Text>{category}</Text>
            <Text>{name}</Text>
          </View>
        </View>
        <Text>{formatNumber(amount)}</Text>
      </View>
    </View>
  );
};
