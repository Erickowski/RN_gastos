import { StyleSheet } from "react-native";

import { GLOBAL_STYLES } from "@src/styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E40AF",
    flex: 1,
  },
  form: {
    ...GLOBAL_STYLES.container,
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    marginBottom: 30,
    color: "#64748B",
  },
  label: {
    marginVertical: 10,
  },
  labelText: {
    color: "#64748B",
    textTransform: "uppercase",
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  submitButton: {
    backgroundColor: "#3b82f6",
    padding: 10,
    marginTop: 20,
  },
  submitText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default styles;
