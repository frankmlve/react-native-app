import { View, FlatList } from "react-native";
import React from "react";
import Screen from "../../components/screen/Screen";
import Card from "../../components/card/Card";
import Icon from "../../components/icon/Icon";
import { styles } from "./styles";

const products = [
    {
        title: "My products",
        price: 250
    },
    {
        title: "My Messages",
        price: 100
    },
];
function CardList({ navigation }) {
    return (
        <Screen>
            <View >
                <FlatList
                    data={products}
                    keyExtractor={(menuItem) => menuItem.title}
                    renderItem={({ item }) => (
                        <Card
                            title={item.title}
                            subtitle={item.subtitle}
                            images={true}
                            onPress={() => navigation.navigate("CardDetails", {name: item.title, price: item.price})}
                        />
                    )}
                />
            </View>
        </Screen>
    );
};
export default CardList;