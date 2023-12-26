import { StyleSheet } from "react-native";

import { COLORS } from "@src/styles";

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    marginBottom: 100,
  },
  title: {
    color: COLORS.slateGray,
    fontSize: 30,
    textAlign: "center",
    fontWeight: "700",
    marginTop: 20,
  },
  noBills: {
    marginVertical: 20,
    textAlign: "center",
    fontSize: 20,
  },
});

export default styles;
