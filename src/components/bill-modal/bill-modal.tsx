import { Dispatch, SetStateAction, useState } from "react";
import {
  Pressable,
  Modal,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";

import { NewBillType, BillType, BILL_EMPTY_STATE } from "@src/types";
import { isSomeObjectValuesEmpty } from "@src/utils";

import { Picker } from "../picker";

import styles from "./styles";

type Props = {
  bill: BillType;
  visible: boolean;
  toggleShowAddModal: () => void;
  handleAddBill: (newBill: NewBillType) => void;
  handleEditBill: (bill: BillType) => void;
  handleDeleteBill: (id: string) => void;
  setBill: Dispatch<SetStateAction<BillType>>;
};

export const BillModal = ({
  bill,
  visible,
  toggleShowAddModal,
  handleAddBill,
  handleEditBill,
  handleDeleteBill,
  setBill,
}: Props) => {
  const [name, setName] = useState(bill.name);
  const [amount, setAmount] = useState(bill.amount);
  const [category, setCategory] = useState(bill.category);

  const handleCancel = () => {
    toggleShowAddModal();
    setBill(BILL_EMPTY_STATE);
  };

  const handleSubmit = () => {
    if (bill?.id) {
      handleEditBill({
        ...bill,
        name,
        amount,
        category,
      });
      setBill(BILL_EMPTY_STATE);
    } else {
      handleAddBill({
        name,
        amount,
        category,
      });
    }
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={handleCancel}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.buttonContainer}>
          <Pressable
            style={[styles.button, styles.cancelButton]}
            onLongPress={handleCancel}
          >
            <Text style={styles.buttonText}>Cancelar</Text>
          </Pressable>
          {bill?.id && (
            <Pressable
              style={[styles.button, styles.deleteButton]}
              onLongPress={() => handleDeleteBill(bill.id ?? "")}
            >
              <Text style={styles.buttonText}>Eliminar</Text>
            </Pressable>
          )}
        </View>

        <View style={styles.form}>
          <Text style={styles.title}>
            {isSomeObjectValuesEmpty(bill) ? "Nuevo gasto" : "Editar gasto"}
          </Text>

          <View style={styles.label}>
            <Text style={styles.labelText}>Nombre Gasto</Text>
            <TextInput
              onChangeText={setName}
              placeholder="Nombre del gasto, ej: comida"
              style={styles.input}
              value={name}
            />
          </View>

          <View style={styles.label}>
            <Text style={styles.labelText}>Cantidad Gasto</Text>
            <TextInput
              onChangeText={setAmount}
              keyboardType="numeric"
              placeholder="Cantidad del gasto, ej: 300"
              style={styles.input}
              value={amount}
            />
          </View>

          <View style={styles.label}>
            <Text style={styles.labelText}>Categoria gasto</Text>
            <Picker selectedValue={category} onValueChange={setCategory} />
          </View>

          <Pressable style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitText}>
              {isSomeObjectValuesEmpty(bill)
                ? "Agregar gasto"
                : "Guardar cambios"}
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </Modal>
  );
};
