import { Dispatch, SetStateAction, useEffect } from "react";
import { Text, View } from "react-native";

import { BillsType, CATEGORIES } from "@src/types";

import { Picker } from "../picker";

import styles from "./styles";

type Props = {
  filteredCategory: CATEGORIES;
  bills: BillsType;
  setFilteredCategory: Dispatch<SetStateAction<CATEGORIES>>;
  setFilteredBills: Dispatch<SetStateAction<BillsType>>;
};

export function Filter({
  filteredCategory,
  bills,
  setFilteredCategory,
  setFilteredBills,
}: Props) {
  useEffect(() => {
    if (filteredCategory === CATEGORIES.empty) {
      setFilteredBills([]);
    } else {
      setFilteredBills(
        bills.filter((bill) => bill.category === filteredCategory)
      );
    }
  }, [filteredCategory]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Filtrar gastos</Text>
      <Picker
        selectedValue={filteredCategory}
        onValueChange={setFilteredCategory}
      />
    </View>
  );
}
