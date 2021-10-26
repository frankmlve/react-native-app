import React from "react";
import { Image, View } from "react-native";

import AppText from "../AppText/AppText";
import styles from "./styles";

function ListItems({ title, subTitle, image, style }) {
  return (
    <View style={[styles.container, style]}>
      <Image source={image} style={styles.image} />
      <View style={styles.userContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

export default ListItems;
