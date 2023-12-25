import { StyleSheet } from "react-native";

import { COLORS } from "@src/styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.cultured,
    flex: 1,
  },
  header: {
    backgroundColor: COLORS.blueberry,
  },
  image: {
    width: 60,
    height: 60,
    position: "absolute",
    top: 220,
    right: 20,
  },
});

export default styles;
