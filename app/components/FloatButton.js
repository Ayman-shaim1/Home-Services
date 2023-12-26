import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";

export default function FloatButton({ icon, onPress, color }) {
  return (
    <TouchableOpacity
      style={[styles.btn, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <MaterialCommunityIcons name={icon} size={24} color={colors.white} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.primary,
    width: 75,
    height: 75,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 37.5,
    alignSelf: "flex-end",
    margin: 5,
  },
});
