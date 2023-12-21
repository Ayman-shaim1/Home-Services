import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";
import Heading from "./Heading";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Label from "./Label";
export default function JobHistoryItem({ navigation , JobHistoryItem}) {
  return (
    <TouchableOpacity style={styles.jobItem} onPress={() => navigation.navigate('details')}>
      <View style={styles.content}>
        <Image source={require("../assets/emp4.jpeg")} style={styles.image} />
        <View style={styles.textContent}>
          <Heading text={JobHistoryItem.employeName} as="heading6" />
          <View style={styles.status}>
            <Text style={styles.statusText}>en cours</Text>
          </View>
        </View>
      </View>
      <Label style={styles.textDate}  text={new Date().toLocaleDateString()}/>
      <MaterialCommunityIcons
        size={30}
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
  image: {
    width: 80,
    height: 80,
    borderRadius: 15,
    resizeMode: "cover",
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
    backgroundColor: colors.successSubtle,
    borderRadius: 7,
    width:80,
    justifyContent: "center",
    alignItems: "center",
  },
  statusText: {
    color: colors.success,
    fontWeight: "700",
    fontSize: 14,
    fontFamily:'Lato-Regular'
  },
  textDate: {
    marginTop: 10,
    color: colors.black,
    fontWeight: "700",
  },
});
