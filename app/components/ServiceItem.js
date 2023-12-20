import React, { useRef, useEffect } from "react";
import {
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import colors from "../config/colors";

export default function ServiceItem({ navigation, service, index }) {
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
    animateItem();
  }, []);

  return (
    <Animated.View
      style={{
        transform: [{ translateY }],
        opacity: animationValue,
      }}
    >
      <TouchableOpacity
        style={styles.service}
        onPress={() => navigation.navigate("EmployeList")}
      >
        <Image source={service.icon} style={styles.image} />
        <Text style={styles.text}>{service.name}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  service: {
    width: 105,
    height: 105,
    paddingVertical: 14,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: colors.gray,
    marginVertical: 10,
    marginHorizontal: 5,
    alignItems: "center",
    borderRadius: 10,
  },
  image: {
    width: 42,
    height: 42,
  },
  text: {
    marginTop: 15,
    fontSize: 13,
    fontWeight: "bold",
    fontFamily: "Lato-Regular",
  },
});
