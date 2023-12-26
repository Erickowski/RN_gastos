import { useState } from "react";
import { View, Alert, Pressable, Image, ScrollView } from "react-native";

import { generateId, isSomeObjectValuesEmpty } from "@src/utils";
import { BillsType, NewBillType, BILL_EMPTY_STATE, BillType } from "@src/types";
import {
  Header,
  NewBudget,
  ControlBudget,
  AddBillModal,
  BillList,
} from "@src/components";

import styles from "./styles";

export function Home() {
  const [budget, setBudget] = useState<string>("");
  const [showControlBudget, setShowControlBudget] = useState<boolean>(false);
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [bills, setBills] = useState<BillsType>([]);
  const [bill, setBill] = useState<BillType>(BILL_EMPTY_STATE);

  const handleValidateBudget = () => {
    if (Number(budget) > 0) {
      setShowControlBudget(true);
    } else {
      Alert.alert("Error", "El presupuesto no puede ser 0 o menor");
    }
  };

  const toggleShowAddModal = () => {
    setShowAddModal((prevState) => !prevState);
  };

  const handleAddBill = (newBill: NewBillType) => {
    if (isSomeObjectValuesEmpty(newBill)) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }

    setBills([
      ...bills,
      {
        ...newBill,
        id: generateId(),
        date: Date.now(),
      },
    ]);
    toggleShowAddModal();
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Header />
          {showControlBudget ? (
            <ControlBudget budgetValue={budget} bills={bills} />
          ) : (
            <NewBudget
              budgetValue={budget}
              onSetBudget={setBudget}
              onValidateBudget={handleValidateBudget}
            />
          )}
        </View>

        {showControlBudget && (
          <BillList
            bills={bills}
            toggleShowAddModal={toggleShowAddModal}
            setBill={setBill}
          />
        )}
      </ScrollView>

      {showAddModal ? (
        <AddBillModal
          bill={bill}
          visible={showAddModal}
          toggleShowAddModal={toggleShowAddModal}
          handleAddBill={handleAddBill}
          setBill={setBill}
        />
      ) : null}

      {showControlBudget ? (
        <Pressable onPress={toggleShowAddModal}>
          <Image
            source={require("@src/assets/img/nuevo-gasto.png")}
            style={styles.image}
          />
        </Pressable>
      ) : null}
    </View>
  );
}
