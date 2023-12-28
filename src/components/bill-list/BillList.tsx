import { Dispatch, SetStateAction } from "react";
import { Text, View } from "react-native";

import { BillType, BillsType, CATEGORIES } from "@src/types";

import { Bill } from "../bill";

import styles from "./styles";

type Props = {
  bills: BillsType;
  filteredBills: BillsType;
  filteredCategory: CATEGORIES;
  toggleShowAddModal: () => void;
  setBill: Dispatch<SetStateAction<BillType>>;
};

export const BillList = ({
  bills,
  filteredBills,
  filteredCategory,
  toggleShowAddModal,
  setBill,
}: Props) => {
  const selectedBills =
    filteredCategory !== CATEGORIES.empty ? filteredBills : bills;
  const showNoBills =
    !bills.length ||
    (filteredCategory !== CATEGORIES.empty && !filteredBills.length);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gastos</Text>
      {selectedBills.length
        ? selectedBills.map((bill) => (
            <Bill
              key={bill.id}
              bill={bill}
              toggleShowAddModal={toggleShowAddModal}
              setBill={setBill}
            />
          ))
        : null}
      {showNoBills && <Text style={styles.noBills}>No hay gastos</Text>}
    </View>
  );
};
