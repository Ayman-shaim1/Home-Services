import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";

export default function PackageItem({ package: packageObj }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={packageObj.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{packageObj.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 150,
    borderRadius: 10,
    zIndex: 100,
    alignItems: "center",
    position: "relative",
    marginRight: 15,
  },
  image: {
    width: "100%",
    height: "99%",
    resizeMode: "cover",
    borderRadius: 10,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  textContainer: {
    backgroundColor: colors.black,
    width: "100%",
    height: 40,
    zIndex: 2000,
    paddingVertical: 10,
    paddingHorizontal: 10,
    opacity: 0.7,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    position: "absolute",
    bottom: "1%",
  },
  title: {
    color: colors.white,
    fontWeight: "bold",
  },
});
