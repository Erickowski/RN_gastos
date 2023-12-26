import { Dispatch, SetStateAction } from "react";
import { Image, Text, View, Pressable } from "react-native";

import { BillType, ICONS } from "@src/types";
import { formatDate, formatNumber } from "@src/utils";

import styles from "./styles";

type Props = {
  bill: BillType;
  toggleShowAddModal: () => void;
  setBill: Dispatch<SetStateAction<BillType>>;
};

export const Bill = ({ bill, toggleShowAddModal, setBill }: Props) => {
  const { name, category, amount, date } = bill;

  const handleClick = () => {
    setBill(bill);
    toggleShowAddModal();
  };

  return (
    <Pressable onLongPress={handleClick}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.imageContainer}>
            <Image source={ICONS[bill.category]} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.category}>{category}</Text>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.date}>{formatDate(date)}</Text>
            </View>
          </View>
          <Text style={styles.amount}>{formatNumber(amount)}</Text>
        </View>
      </View>
    </Pressable>
  );
};
