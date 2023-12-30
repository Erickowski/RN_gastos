import { StyleSheet } from "react-native";

import { GLOBAL_STYLES, COLORS } from "@src/styles";

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
    color: COLORS.blueberry,
  },
  circularTitle: {
    fontWeight: "700",
    fontSize: 24,
    color: COLORS.blueberry,
  },
  circularSubtitle: {
    color: COLORS.slateGray,
    marginTop: 5,
  },
  button: {
    backgroundColor: COLORS.vividCerise,
    padding: 10,
    marginBottom: 40,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: "center",
    color: COLORS.white,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default styles;
