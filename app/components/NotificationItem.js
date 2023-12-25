import {
  StyleSheet,
  TouchableOpacity,
  View,
  Animated,
  Text,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import colors from "../config/colors";
import Heading from "./Heading";
import Label from "./Label";
import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useTimeAgo } from "../hooks";

export default function NotificationItem({ notification, onDelete }) {
  const formatedDate = useTimeAgo(notification.date);

  const [translateX, setTranslateX] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const onPanGestureEvent = ({ nativeEvent }) => {
    const { translationX } = nativeEvent;
    if (translationX < 0 || (translateX <= -80 && translateX >= 0))
      setTranslateX(translationX);

    if (translateX < -50) setShowButton(true);
  };

  const onPanHandlerStateChange = ({ nativeEvent }) => {
    if (nativeEvent.state === State.END) {
      const { translationX } = nativeEvent;
      if (translationX >= -50) {
        setTranslateX(0);
        setShowButton(false);
      } else {
        setTranslateX(-55);
      }
    }
  };

  useFocusEffect(
    useCallback(() => {
      setTranslateX(0);
      setShowButton(false);
    }, [])
  );

  return (
    <>
      <Animated.View
        style={[styles.notificationItem, { transform: [{ translateX }] }]}
      >
        <PanGestureHandler
          onGestureEvent={onPanGestureEvent}
          onHandlerStateChange={onPanHandlerStateChange}
        >
          <View>
            <View style={styles.headerText}>
              <Heading text={`De ${notification.user}`} as="heading6" />
              {notification.seen && (
                <View style={styles.seen}>
                  <Text style={styles.seentext}>nouvelle</Text>
                </View>
              )}
            </View>
            <Text style={styles.messageContent}>{notification.content}</Text>
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>{formatedDate}</Text>
            </View>
          </View>
        </PanGestureHandler>
      </Animated.View>
      {showButton && (
        <TouchableOpacity style={styles.btnDelete} onPress={onDelete}>
          <MaterialCommunityIcons
            name="trash-can"
            size={30}
            color={colors.danger}
          />
        </TouchableOpacity>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  notificationItem: {
    backgroundColor: colors.lightGray,
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginVertical: 5,
    borderRadius: 10,
    justifyContent: "center",
    width: "100%",
    zIndex: 1000,
  },
  dateContainer: {
    alignItems: "flex-end",
  },
  dateText: {
    color: colors.gray,
    fontFamily: "LatoBlack",
  },
  messageContent: {
    marginBottom: 20,
    fontFamily: "LatoRegular",
  },
  btnDelete: {
    height: "72%",
    width: 50,
    backgroundColor: colors.dangerSubtle,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 0,
    top: "13%",
  },
  seen: {
    backgroundColor: colors.primary,
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: 77,
    borderRadius: 4,
  },
  seentext: {
    color: colors.white,
    fontFamily: "LatoBlack",
  },
  headerText: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
});
