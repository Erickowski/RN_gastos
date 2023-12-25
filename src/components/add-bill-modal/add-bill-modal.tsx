import {
  Pressable,
  Modal,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

import styles from "./styles";
import { PICKER_ITEMS } from "./constants";

type Props = {
  visible: boolean;
};

export const AddBillModal = ({ visible }: Props) => {
  return (
    <Modal visible={visible} animationType="slide">
      <SafeAreaView style={styles.container}>
        <View>
          <Pressable>
            <Text>Cancelar</Text>
          </Pressable>
        </View>

        <View style={styles.form}>
          <Text style={styles.title}>Nuevo gasto</Text>

          <View style={styles.label}>
            <Text style={styles.labelText}>Nombre Gasto</Text>
            <TextInput
              placeholder="Nombre del gasto, ej: comida"
              style={styles.input}
            />
          </View>

          <View style={styles.label}>
            <Text style={styles.labelText}>Cantidad Gasto</Text>
            <TextInput
              keyboardType="numeric"
              placeholder="Cantidad del gasto, ej: 300"
              style={styles.input}
            />
          </View>

          <View style={styles.label}>
            <Text style={styles.labelText}>Categoria gasto</Text>
            <Picker>
              {PICKER_ITEMS.map((item) => (
                <Picker.Item {...item} key={item.value} />
              ))}
            </Picker>
          </View>

          <Pressable style={styles.submitButton}>
            <Text style={styles.submitText}>Agregar gasto</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </Modal>
  );
};
