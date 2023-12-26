import { Text, View } from "react-native";

import { Bill as BillType } from "@src/types";

type Props = {
  bill: BillType;
};

export const Bill = ({ bill }: Props) => {
  return (
    <View>
      <Text>{bill.name}</Text>
    </View>
  );
};
