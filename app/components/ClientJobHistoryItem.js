import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";
import Heading from "./Heading";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Label from "./Label";
import Image from "./Image";

export default function ClientJobHistoryItem({ navigation, JobHistoryItem }) {
  return (
    <TouchableOpacity
      style={styles.jobItem}
      onPress={() => navigation.navigate("details")}
    >
      <View style={styles.content}>
        <Image source={JobHistoryItem.image} />
        <View style={styles.textContent}>
          <Heading text={JobHistoryItem.employeName} as="heading6" />
          <View style={styles.status}>
            <Text style={styles.statusText}>en cours</Text>
          </View>
        </View>
      </View>
      <Label style={styles.textDate} text={new Date().toLocaleDateString()} />
      <MaterialCommunityIcons
        size={22}
        name="arrow-right"
        color={colors.gray}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  jobItem: {
    backgroundColor: colors.lightGray,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginVertical: 10,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContent: {
    marginLeft: 15,
  },
  status: {
    paddingVertical: 10,
    paddingHorizontal: 7,
    backgroundColor: colors.warningSubtle,
    borderRadius: 7,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  statusText: {
    color: colors.warning,
    fontSize: 14,
    fontFamily: "LatoRegular",
  },
  textDate: {
    marginTop: 10,
    color: colors.black,
    fontWeight: "700",
  },
});
