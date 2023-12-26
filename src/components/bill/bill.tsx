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
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image source={ICONS[bill.category]} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.category}>{category}</Text>
            <Text style={styles.name}>{name}</Text>
          </View>
        </View>
        <Text style={styles.amount}>{formatNumber(amount)}</Text>
      </View>
    </View>
  );
};
