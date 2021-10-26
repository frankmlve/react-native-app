import React from "react";
import { FlatList, Text, View } from "react-native";
import AppText from "../../components/AppText";

import Card from "../../components/card/Card";
import ListItem from "../../components/listItem";
import Icon from "../../components/icon/Icon";
import Screen from "../../components/screen/Screen";
import {styles} from "./styles";

const menu = [
  {
    title: "My products",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: "blue",
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: "blue",
    },
  },
];
function AccountScreen(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <ListItem
          title={"Franklin Lucena"}
          subTitle={"creator"}
          image={require("../../assets/logo.png")}
          style={styles.avatar}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menu}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subtitle={item.subtitle}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
    </Screen>
  );
}

export default AccountScreen;
