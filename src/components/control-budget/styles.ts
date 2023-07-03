import { StyleSheet } from "react-native";

import { GLOBAL_STYLES } from "@src/styles";

const styles = StyleSheet.create({
  container: GLOBAL_STYLES.container,
  graphCenter: {
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 250,
  },
  textContainer: {
    marginTop: 50,
  },
  value: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 10,
  },
  label: {
    fontWeight: "700",
    color: "#3B82F6",
  },
});

export default styles;