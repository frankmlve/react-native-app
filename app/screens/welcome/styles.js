import { StyleSheet, Platform, StatusBar } from "react-native";
import colors from "../../utils/colors";
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkBlue,
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: "15%",
    fontSize: 20,
    alignItems: "center",
  },
  logoImage: {
    width: 200,
    height: 200,
  },
  logoText: {
    fontSize: 30,
    color: colors.white
  },
  logoTextSubtitle: {
    fontSize: 15,
    color: colors.white
  },
  button: {
    position: "absolute",
    bottom: "10%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
});

export default styles;
