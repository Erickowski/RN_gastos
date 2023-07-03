import { StyleSheet } from "react-native";

import { GLOBAL_STYLES } from "@src/styles";

const styles = StyleSheet.create({
  container: GLOBAL_STYLES.container,
  label: {
    textAlign: "center",
    marginBottom: 30,
    fontSize: 24,
    color: "#3B82F6",
  },
  input: {
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: 10,
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#1048A4",
    padding: 10,
    borderRadius: 10,
  },
  textButton: {
    color: "#FFF",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default styles;
