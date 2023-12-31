import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import colors from "../config/colors";
import Rating from "./Rating";
import Image from "./Image";

export default function EmployeItem({ navigation, employe, index }) {
  const animationValue = useRef(new Animated.Value(0)).current;
  const animateItem = () => {
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 500,
      delay: index * 200,
      useNativeDriver: false,
    }).start();
  };

  const translateY = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0],
  });

  useEffect(() => {
    animateItem(1);
  }, []);

  return (
    <Animated.View
      style={{
        transform: [{ translateY }],
        opacity: animationValue,
      }}
    >
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("EmployeDetails")}
      >
        <View style={styles.wrapper}>
          <Image source={employe.image}  />
          <View style={styles.info}>
            <Text style={styles.name}>{employe.name}</Text>
            <Text style={styles.price}>{employe.price} MAD par heure</Text>
            <Rating number={employe.rating} style={styles.rating} />
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    position: "relative",
    borderRadius: 10,
    paddingVertical: 5,
  },
  wrapper: {
    flexDirection: "row",
  },
  info: {
    marginLeft: 10,
  },
  name: {
    fontSize: 21,
    color: colors.black,
    fontFamily: "LatoBlack",
  },
  price: {
    fontSize: 14,
    color: colors.gray,
    fontFamily: "LatoRegular",
  },
});
