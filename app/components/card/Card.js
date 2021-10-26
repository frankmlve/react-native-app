import React from "react";
import { Image, ImageBackground, TouchableOpacity, View } from "react-native";
import AppText from "../AppText";

import styles from "./styles";

function Card({ title, subtitle, images, onPress, IconComponent }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.cardContainer}>
        {IconComponent}
        {!IconComponent && <ImageBackground
          source={images ? { uri: "https://picsum.photos/200/300" } : require('../../assets/SD-default-image.png')}
          style={styles.image}
        ><View style={styles.imageContainer}>
            <View style={styles.detailContainer}>
              <AppText style={styles.title}>{title}</AppText>
              <AppText style={styles.subtitle}>{subtitle}</AppText>
            </View>
          </View>
        </ImageBackground>}

        <View style={styles.detailContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subtitle}>{subtitle}</AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default Card;
