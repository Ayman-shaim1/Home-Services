import { Image as RNImage, StyleSheet } from "react-native";

const SIZES = {
  sm: 40,
  md: 65,
  lg: 80,
  xl: 110,
  xxl: 140,
};

export default function Image({ source, size = "lg" }) {
  return (
    <RNImage
      source={source}
      style={[styles.image, { height: SIZES[size], width: SIZES[size] }]}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 15,
    resizeMode: "cover",
  },
});
