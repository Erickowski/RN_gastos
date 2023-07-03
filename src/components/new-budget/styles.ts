import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 40,
    paddingHorizontal: 20,
    transform: [{ translateY: 50 }],
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
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
