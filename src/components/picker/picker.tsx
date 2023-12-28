import { Dispatch, SetStateAction } from "react";
import { Picker as PickerComponent } from "@react-native-picker/picker";

import { CATEGORIES, PICKER_ITEMS } from "@src/types";

type Props = {
  selectedValue: CATEGORIES;
  onValueChange: Dispatch<SetStateAction<CATEGORIES>>;
};

export function Picker({ selectedValue, onValueChange }: Props) {
  return (
    <PickerComponent
      selectedValue={selectedValue}
      onValueChange={onValueChange}
    >
      {PICKER_ITEMS.map((item) => (
        <PickerComponent.Item {...item} key={item.value} />
      ))}
    </PickerComponent>
  );
}
