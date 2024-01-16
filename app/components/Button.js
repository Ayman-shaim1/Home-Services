import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Button({
  text,
  color = "primary",
  style,
  image,
  icon,
  onPress,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        style,
        styles.btn,
        {
          backgroundColor: colors[color],
          borderColor: color === "white" ? colors.gray : colors[color],
        },
      ]}
    >
      {image && <Image source={image} style={styles.image} />}
      {icon && (
        <MaterialCommunityIcons
          style={styles.icon}
          name={icon}
          size={18}
          color={color === "white" ? colors.gray : colors.white}
        />
      )}
      <Text
        style={[
          styles.text,
          {
            color: color === "white" ? colors.black : colors.white,
          },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 5,
  },
  btn: {
    paddingVertical: 17,
    alignItems: "center",
    // backgroundColor:colors.primary,
    borderRadius: 15,
    marginVertical: 4,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  text: {
    fontSize: 15,
    fontFamily:'LatoBlack'
    // textTransform:'uppercase'
  },
  image: {
    width: 18,
    height: 18,
    marginRight: 10,
  },
});
