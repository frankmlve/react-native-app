import { StyleSheet, Dimensions } from "react-native";

var { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 15,
    backgroundColor: "white",
    marginBottom: 20,
    overflow: "hidden",
    flex: 1,
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    width: width - 50,
    alignSelf: "center"
  },
  imageContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex:1,
    alignSelf: "stretch",
    alignItems: "flex-start",
    justifyContent: "flex-end"
  },
  image: {
    width: "100%",
    height: 300,
    justifyContent: "center",
    alignItems: "center"
  },
  detailContainer: {
    padding: 20,
    textDecorationColor: "white",
  },
  title: {
    marginBottom: 7,
    color: "white"
  },
  subtitle: {
    color: "lightblue",
    fontWeight: "bold",
  },
});
export default styles;
