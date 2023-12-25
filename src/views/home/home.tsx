import { useState } from "react";
import { View, Alert, Pressable, Image } from "react-native";

import { BillType, NewBillType } from "@src/types";
import {
  Header,
  NewBudget,
  ControlBudget,
  AddBillModal,
} from "@src/components";

import styles from "./styles";

export function Home() {
  const [budget, setBudget] = useState<string>("");
  const [showControlBudget, setShowControlBudget] = useState<boolean>(false);
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [bills, setBills] = useState<BillType>([
    {
      id: "1",
      value: 30,
    },
    {
      id: "2",
      value: 20,
    },
    {
      id: "3",
      value: 50,
    },
  ]);

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
    if (Object.values(newBill).includes("")) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }
  };

  return (
    <View style={styles.container}>
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

      {showAddModal ? (
        <AddBillModal
          visible={showAddModal}
          toggleShowAddModal={toggleShowAddModal}
          handleAddBill={handleAddBill}
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
