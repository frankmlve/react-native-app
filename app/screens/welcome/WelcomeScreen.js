import React from "react";
import { View, Image, Button } from "react-native";
import Screen from "../../components/screen/Screen";
import { LinearGradient } from "expo-linear-gradient";

import AppText from "../../components/AppText";
import AppButton from "../../components/appbutton"
import styles from "./styles";
import colors from "../../utils/colors";

function WelcomeScreen({ navigation }) {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/logo.png")}
            style={styles.logoImage}
          />
          <AppText style={styles.logoText}>Sell It!</AppText>
          <AppText style={styles.logoTextSubtitle}>Login to start making money</AppText>
        </View>
        <View style={styles.button}>
          <AppButton
            onPress={() => navigation.navigate("Login")}
            title="Login" color={colors.white} textColor={colors.darkBlue}
          />
          <AppButton
            onPress={() => navigation.navigate("Register")}
            title="Register" color={colors.morningBlue}
          />
        </View>
      </View>
    </Screen>
  );
}

export default WelcomeScreen;