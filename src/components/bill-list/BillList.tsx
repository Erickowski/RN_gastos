import { Dispatch, SetStateAction } from "react";
import { Text, View } from "react-native";

import { BillType, BillsType } from "@src/types";

import { Bill } from "../bill";

import styles from "./styles";

type Props = {
  bills: BillsType;
  toggleShowAddModal: () => void;
  setBill: Dispatch<SetStateAction<BillType>>;
};

export const BillList = ({ bills, toggleShowAddModal, setBill }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gastos</Text>
      {bills.length ? (
        bills.map((bill) => (
          <Bill
            key={bill.id}
            bill={bill}
            toggleShowAddModal={toggleShowAddModal}
            setBill={setBill}
          />
        ))
      ) : (
        <Text style={styles.noBills}>No hay gastos</Text>
      )}
    </View>
  );
};
