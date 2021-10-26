import React from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./styles";

function AppButton({ title, onPress, color = "blue" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;
