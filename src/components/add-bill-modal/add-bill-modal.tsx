import {
  Pressable,
  Modal,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

import { PICKER_ITEMS } from "./constants";

type Props = {
  visible: boolean;
};

export const AddBillModal = ({ visible }: Props) => {
  return (
    <Modal visible={visible} animationType="slide">
      <SafeAreaView>
        <View>
          <Pressable>
            <Text>Cancelar</Text>
          </Pressable>
        </View>

        <View>
          <Text>Nuevo gasto</Text>

          <View>
            <Text>Nombre Gasto</Text>
            <TextInput placeholder="Nombre del gasto, ej: comida" />
          </View>

          <View>
            <Text>Cantidad Gasto</Text>
            <TextInput
              keyboardType="numeric"
              placeholder="Cantidad del gasto, ej: 300"
            />
          </View>

          <View>
            <Text>Categoria gasto</Text>
            <Picker>
              {PICKER_ITEMS.map((item) => (
                <Picker.Item {...item} key={item.value} />
              ))}
            </Picker>
          </View>

          <Pressable>
            <Text>Agregar gasto</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </Modal>
  );
};
