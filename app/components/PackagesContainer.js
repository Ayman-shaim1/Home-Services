import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import colors from "../config/colors";
import Heading from "./Heading";
import PackageItem from "./PackageItem";

const PACKAGES = [
  {
    id: 1,
    image: require("../assets/jardinage.jpeg"),
    title: "jardinage & menage",
  },
  {
    id: 2,
    image: require("../assets/coach-massage.jpeg"),
    title: "coach & Kiné ",
  },
];

export default function PackagesContainer() {
  return (
    <View style={styles.container}>
      <Heading text="Paquets" as="heading5" />
      <ScrollView
        style={styles.listContainer}
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {PACKAGES.map((item) => (
          <PackageItem key={item.id} package={item} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginTop: 10,
    paddingVertical: 10,
    paddingBottom: 15,
    borderRadius: 10,
  },
  listContainer: {
    marginTop: 15,
    borderRadius: 10,
  },
});
