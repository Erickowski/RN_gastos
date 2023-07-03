import { Modal, Text, SafeAreaView } from "react-native";

type Props = {
  visible: boolean;
};

export const AddBillModal = ({ visible }: Props) => {
  return (
    <Modal visible={visible} animationType="slide">
      <SafeAreaView>
        <Text>Modal</Text>
      </SafeAreaView>
    </Modal>
  );
};
