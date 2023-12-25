import { StyleSheet } from "react-native";

import { GLOBAL_STYLES, COLORS } from "@src/styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.denimBlue,
    flex: 1,
  },
  form: {
    ...GLOBAL_STYLES.container,
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    marginBottom: 30,
    color: COLORS.slateGray,
  },
  label: {
    marginVertical: 10,
  },
  labelText: {
    color: COLORS.slateGray,
    textTransform: "uppercase",
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: COLORS.cultured,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  submitButton: {
    backgroundColor: COLORS.blueberry,
    padding: 10,
    marginTop: 20,
  },
  submitText: {
    textAlign: "center",
    color: COLORS.white,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default styles;
