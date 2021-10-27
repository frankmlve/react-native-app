import { StyleSheet } from "react-native";
import colors from "../../utils/colors";
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: colors.white
  },
  price: {
    color: "lightblue",
    fontWeight: "bold",
    fontSize: 20,
  },
  userContainer: {
    marginVertical: 50,
  },
});

export default styles;
