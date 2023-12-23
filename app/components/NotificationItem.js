import { StyleSheet, View } from "react-native";
import Label from "./Label";
import colors from "../config/colors";
import Heading from "./Heading";

export default function NotificationItem() {
  return (
    <View style={styles.notificationItem}>
        <Heading text={"De jhon doe"} as="heading6"/>
      <Label
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis, nulla at sodales condimentum"
        }
      />
      <View style={styles.dateContainer}>
        <Label color={"gray"} text={"il y 2 minutes"}/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  notificationItem: {
    backgroundColor: colors.lightGray,
    padding: 18,
    marginVertical: 10,
    borderRadius: 20,
    justifyContent:'center'
  },
  dateContainer: {
    alignItems: "flex-end",
  },
});
