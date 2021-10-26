import React from "react";
import { Image, View } from "react-native";
import AppText from "../../components/AppText";
import ListItems from "../../components/listItem";
import Screen from "../../components/screen/Screen";

import styles from "./styles";

function CardDetailsScreen({route}) {
  return (
    <View>
      <Image
        source={{ uri: "https://picsum.photos/200/300" }}
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{route.params.name}</AppText>
        <AppText style={styles.price}>${route.params.price}</AppText>
        <View style={styles.userContainer}>
          <ListItems
            title={"Franklin Lucena"}
            subTitle={"callmefrank_ve.gmail.com"}
            image={require("../../assets/logo.png")}
          />
        </View>
      </View>
    </View>
  );
}

export default CardDetailsScreen;
