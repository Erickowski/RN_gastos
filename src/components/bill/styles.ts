import { StyleSheet } from "react-native";

import { GLOBAL_STYLES, COLORS } from "@src/styles";

const styles = StyleSheet.create({
  container: {
    ...GLOBAL_STYLES.container,
    marginBottom: 20,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    flex: 1,
  },
  image: {
    width: 80,
    height: 80,
  },
  textContainer: {
    flex: 1,
  },
  category: {
    color: COLORS.cadetGrey,
    fontSize: 16,
    fontWeight: "700",
    textTransform: "uppercase",
    marginBottom: 5,
  },
  name: {
    fontSize: 22,
    color: COLORS.slateGray,
    marginBottom: 5,
  },
  amount: {
    fontSize: 20,
    fontWeight: "700",
  },
});

export default styles;
