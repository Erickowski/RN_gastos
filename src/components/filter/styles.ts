import { StyleSheet } from "react-native";

import { GLOBAL_STYLES, COLORS } from "@src/styles";

const styles = StyleSheet.create({
  container: {
    ...GLOBAL_STYLES.container,
    marginTop: 20,
  },
  label: {
    fontSize: 22,
    fontWeight: "900",
    color: COLORS.slateGray,
  },
});

export default styles;
