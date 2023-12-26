import { Dispatch, SetStateAction, useState } from "react";
import {
  Pressable,
  Modal,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

import { NewBillType, BillType, BILL_EMPTY_STATE } from "@src/types";
import { isSomeObjectValuesEmpty } from "@src/utils";

import { PICKER_ITEMS } from "./constants";

import styles from "./styles";

type Props = {
  bill: BillType;
  visible: boolean;
  toggleShowAddModal: () => void;
  handleAddBill: (newBill: NewBillType) => void;
  setBill: Dispatch<SetStateAction<BillType>>;
};

export const AddBillModal = ({
  bill,
  visible,
  toggleShowAddModal,
  handleAddBill,
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
    handleAddBill({
      name,
      amount,
      category,
    });
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={handleCancel}
    >
      <SafeAreaView style={styles.container}>
        <View>
          <Pressable style={styles.cancelButton} onLongPress={handleCancel}>
            <Text style={styles.cancelText}>Cancelar</Text>
          </Pressable>
        </View>

        <View style={styles.form}>
          <Text style={styles.title}>Nuevo gasto</Text>

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
            <Picker selectedValue={category} onValueChange={setCategory}>
              {PICKER_ITEMS.map((item) => (
                <Picker.Item {...item} key={item.value} />
              ))}
            </Picker>
          </View>

          <Pressable style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitText}>
              {isSomeObjectValuesEmpty(bill) ? "Agregar" : "Editar"} gasto
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </Modal>
  );
};
