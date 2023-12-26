import { StyleSheet } from "react-native";

import { GLOBAL_STYLES, COLORS } from "@src/styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.denimBlue,
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    padding: 10,
    marginTop: 30,
    marginHorizontal: 10,
    flex: 1,
  },
  cancelButton: {
    backgroundColor: COLORS.vividCerise,
  },
  deleteButton: {
    backgroundColor: COLORS.red,
  },
  buttonText: {
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
    color: COLORS.white,
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
