import { StyleSheet } from "react-native";

import { GLOBAL_STYLES, COLORS } from "@src/styles";

const styles = StyleSheet.create({
  container: GLOBAL_STYLES.container,
  label: {
    textAlign: "center",
    marginBottom: 30,
    fontSize: 24,
    color: COLORS.blueberry,
  },
  input: {
    backgroundColor: COLORS.cultured,
    padding: 10,
    borderRadius: 10,
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: COLORS.denimBlue,
    padding: 10,
    borderRadius: 10,
  },
  textButton: {
    color: COLORS.white,
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default styles;
