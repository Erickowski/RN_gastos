import { useEffect, useState } from "react";
import { View, Alert, Pressable, Image, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { generateId, isSomeObjectValuesEmpty } from "@src/utils";
import {
  BillsType,
  NewBillType,
  BILL_EMPTY_STATE,
  BillType,
  CATEGORIES,
  KEYS_STORAGE,
} from "@src/types";
import {
  Header,
  NewBudget,
  ControlBudget,
  BillModal,
  BillList,
  Filter,
} from "@src/components";

import styles from "./styles";

export function Home() {
  const [budget, setBudget] = useState<string>("");
  const [showControlBudget, setShowControlBudget] = useState<boolean>(false);
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [bills, setBills] = useState<BillsType>([]);
  const [bill, setBill] = useState<BillType>(BILL_EMPTY_STATE);
  const [filteredCategory, setFilteredCategory] = useState(CATEGORIES.empty);
  const [filteredBills, setFilteredBills] = useState<BillsType>([]);

  useEffect(() => {
    const getBudgetKeyStorage = async () => {
      try {
        const budget = (await AsyncStorage.getItem(KEYS_STORAGE.budget)) ?? "0";
        if (Number(budget) > 0) {
          setBudget(budget);
          setShowControlBudget(true);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getBudgetKeyStorage();
  }, [budget]);

  useEffect(() => {
    if (showControlBudget) {
      const setBudgetKeyStorage = async () => {
        try {
          await AsyncStorage.setItem(KEYS_STORAGE.budget, budget);
        } catch (error) {
          console.log(error);
        }
      };

      setBudgetKeyStorage();
    }
  }, [showControlBudget]);

  useEffect(() => {
    const getBillsKeyStorage = async () => {
      try {
        const bills = await AsyncStorage.getItem(KEYS_STORAGE.bills);
        setBills(bills ? JSON.parse(bills) : []);
      } catch (error) {
        console.log(error);
      }
    };

    getBillsKeyStorage();
  }, []);

  useEffect(() => {
    const setBillsKeyStorage = async () => {
      try {
        await AsyncStorage.setItem(KEYS_STORAGE.bills, JSON.stringify(bills));
      } catch (error) {
        console.log(error);
      }
    };

    setBillsKeyStorage();
  }, [bills]);

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

  const handleEditBill = (editedBill: BillType) => {
    const modifiedBills = bills.map((bill) =>
      bill.id === editedBill.id ? editedBill : bill
    );
    setBills(modifiedBills);
    toggleShowAddModal();
  };

  const handleDeleteBill = (id: string) => {
    Alert.alert(
      "¿Deseas eliminar este gasto?",
      "Un gasto eliminado no se puede recuperar",
      [
        { text: "No", style: "cancel" },
        {
          text: "Si, eliminar",
          onPress: () => {
            const modifiedBills = bills.filter((bill) => bill.id !== id);
            setBills(modifiedBills);
            setBill(BILL_EMPTY_STATE);
            toggleShowAddModal();
          },
        },
      ]
    );
  };

  const handleReset = () => {
    Alert.alert(
      "¿Deseas resetear la app?",
      "Esto eliminara presupuesto y gastos",
      [
        { text: "No", style: "cancel" },
        {
          text: "Si, eliminar",
          onPress: async () => {
            try {
              await AsyncStorage.clear();

              setShowControlBudget(false);
              setBudget("");
              setBills([]);
            } catch (error) {
              console.log(error);
            }
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Header />
          {showControlBudget ? (
            <ControlBudget
              budgetValue={budget}
              bills={bills}
              onReset={handleReset}
            />
          ) : (
            <NewBudget
              budgetValue={budget}
              onSetBudget={setBudget}
              onValidateBudget={handleValidateBudget}
            />
          )}
        </View>

        {showControlBudget && (
          <>
            <Filter
              filteredCategory={filteredCategory}
              setFilteredCategory={setFilteredCategory}
              bills={bills}
              setFilteredBills={setFilteredBills}
            />
            <BillList
              bills={bills}
              filteredBills={filteredBills}
              filteredCategory={filteredCategory}
              toggleShowAddModal={toggleShowAddModal}
              setBill={setBill}
            />
          </>
        )}
      </ScrollView>

      {showAddModal ? (
        <BillModal
          bill={bill}
          visible={showAddModal}
          toggleShowAddModal={toggleShowAddModal}
          handleAddBill={handleAddBill}
          handleEditBill={handleEditBill}
          handleDeleteBill={handleDeleteBill}
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
