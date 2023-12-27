import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../config/colors";

export default function IconButton({ color = "primary", icon, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btn, { backgroundColor: colors[color] }]}
    >
      <MaterialCommunityIcons name={icon} size={16} color={colors.white} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    padding: 12,
    borderRadius: 10,
    width:41
  },
});
