import { StyleSheet, PanResponder, TouchableOpacity, View } from "react-native";
import Label from "./Label";
import colors from "../config/colors";
import Heading from "./Heading";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";

const DeleteButton = ({ ondelete }) => (
  <TouchableOpacity style={styles.btnDelete} onPress={ondelete}>
    <MaterialCommunityIcons name="trash-can" size={30} color={colors.danger} />
  </TouchableOpacity>
);

export default function NotificationItem() {
  const deletenHandler = () => {
    alert("Hello world");
  };

  return (
    <Swipeable
      renderRightActions={() => <DeleteButton ondelete={deletenHandler} />}
    >
      <View style={styles.notificationItem}>
        <Heading text={"De jhon doe"} as="heading6" />
        <Label
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis, nulla at sodales condimentum"
          }
        />
        <View style={styles.dateContainer}>
          <Label color={"gray"} text={"il y 2 minutes"} />
        </View>
      </View>
    </Swipeable>
  );
}
const styles = StyleSheet.create({
  notificationItem: {
    backgroundColor: colors.lightGray,
    padding: 18,
    marginVertical: 10,
    borderRadius: 20,
    justifyContent: "center",
  },
  dateContainer: {
    alignItems: "flex-end",
  },
  btnDelete: {
    width: 50,
    height: "85%",
    backgroundColor: colors.dangerSubtle,
    alignSelf: "center",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
