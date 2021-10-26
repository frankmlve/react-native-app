import React from "react";
import { View, Image, Button } from "react-native";
import Screen from "../../components/screen/Screen";
import { LinearGradient } from "expo-linear-gradient";

import AppText from "../../components/AppText";
import AppButton from "../../components/appbutton"
import styles from "./styles";

function MainScreen({ navigation }) {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/logo.png")}
            style={styles.logoImage}
          />
          <AppText style={styles.logoText}>Sell It!</AppText>
        </View>
        <View style={styles.button}>
          <AppButton
            onPress={() => navigation.navigate("Account")}
            title="Buscar" color="orange"
          />
        </View>
      </View>
    </Screen>
  );
}

export default MainScreen;
