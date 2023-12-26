import { StyleSheet } from "react-native";

import { COLORS } from "@src/styles";

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
  },
  title: {
    color: COLORS.slateGray,
    fontSize: 30,
    textAlign: "center",
    fontWeight: "700",
  },
  noBills: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 20,
  },
});

export default styles;
