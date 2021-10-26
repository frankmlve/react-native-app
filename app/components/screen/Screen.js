import React from "react";
import Constants from "expo-constants";
import { SafeAreaView, View } from "react-native";

import styles from './styles';

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}


export default Screen;
