import { StyleSheet, Text, View, Animated } from "react-native";
import colors from "../config/colors";
import { useEffect, useRef } from "react";

export default function DiplomaItem({ index, diploma }) {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const translateX = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      delay: index * 200,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={[
        styles.diploma,
        {
          opacity: fadeAnim,
          transform: [{ translateX }],
        },
      ]}
    >
      <Text style={styles.text}>{diploma.title}</Text>
      <Text style={styles.dates}>
        {diploma.startyear}-{diploma.endyear}
      </Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  diploma: {
    backgroundColor: "#f4f4f4",
    margin: 2,
    padding: 17,
    borderRadius: 7,
  },
  text: {
    fontSize: 18,
    fontWeight: "800",
  },
  dates: {
    color: colors.gray,
    fontWeight: "700",
  },
});
