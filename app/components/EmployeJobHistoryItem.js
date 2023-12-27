import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";
import Heading from "./Heading";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Label from "./Label";
import Image from "./Image";

export default function EmployeJobHistoryItem({ navigation, JobHistoryItem }) {
  return (
    <TouchableOpacity
      style={styles.jobItem}
      onPress={() => navigation.navigate("details")}
    >
      <View style={styles.content}>
        <Image source={JobHistoryItem.image} />
        <View style={styles.textContent}>
          <Heading text={JobHistoryItem.employeName} as="headin6" />
        </View>
      </View>
      <View style={{ alignItems: "flex-end" }}>
        {JobHistoryItem.isCurrent && (
          <View style={styles.current}>
            <Text style={styles.currentText}>en cours</Text>
          </View>
        )}
        <Label style={styles.textDate} text={new Date().toLocaleDateString()} />
      </View>
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
  current: {
    backgroundColor: colors.primary,
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: 77,
    borderRadius: 4,
    marginBottom: 7,
  },
  currentText: {
    color: colors.white,
    fontFamily: "LatoBlack",
  },
});
