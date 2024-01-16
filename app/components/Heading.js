import { Text, StyleSheet } from "react-native";
import colors from "../config/colors";

export default function Heading({
  text,
  as = "heading1",
  color = "black",
  style,
}) {
  return (
    <Text style={[styles[as], styles.heading, { color: colors[color] }, style]}>
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  heading: {
    marginVertical: 5,
    fontFamily: "LatoBlack",
  },
  heading1: {
    fontSize: 55,
  },
  heading2: {
    fontSize: 45,
  },
  heading3: {
    fontSize: 39,
  },
  heading4: {
    fontSize: 32,
  },
  heading5: {
    fontSize: 26,
  },
  heading6: {
    fontSize: 18,
  },
});
