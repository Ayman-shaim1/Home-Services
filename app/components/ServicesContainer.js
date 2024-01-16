import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ServiceItem from "./ServiceItem";
import Heading from "./Heading";
import colors from "../config/colors";

const SERVICES = [
  {
    id: 1,
    name: "Menage",
    icon: require("../assets/cleaning.png"),
  },
  {
    id: 2,
    name: "Coiffeur",
    icon: require("../assets/salon-de-coiffure.png"),
  },
  {
    id: 3,
    name: "Plombier",
    icon: require("../assets/plombier.png"),
  },
  {
    id: 4,
    name: "Cuisinier",
    icon: require("../assets/chef.png"),
  },
  {
    id: 5,
    name: "Kiné",
    icon: require("../assets/massage.png"),
  },
  {
    id: 6,
    name: "Coach",
    icon: require("../assets/sport.png"),
  },
  {
    id: 7,
    name: "Jardinage",
    icon: require("../assets/gardening.png"),
  },
];

export default function ServicesContainer({ navigation }) {
  return (
    <View style={styles.container}>
      <Heading text="Services" as="heading5" />

      <View style={styles.listContainer}>
        <FlatList
          data={SERVICES}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <ServiceItem navigation={navigation} service={item} index={index} />
          )}
          numColumns={3}
          scrollEnabled={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  listContainer: {
    alignItems: "center",
    margin: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
});
