import { Animated, Platform, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import CloseButton from "./CloseButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { hideToast } from "../redux/toast/toastActions";

const iconobj = {
  success: "check-circle",
  warning: "alert-circle",
  danger: "close-circle",
};

export default function Toast() {
  const dispatch = useDispatch();
  const toast = useSelector((state) => state.toast);
  const { show, message, type } = toast;

  const animationValue = useRef(new Animated.Value(0)).current;
  const animateItem = () => {
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 350,
      delay: 200,
      useNativeDriver: false,
    }).start();
  };

  const translateY = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0],
  });

  const hideToastHandler = () => {
    Animated.timing(animationValue, {
      toValue: 0,
      duration: 350,
      useNativeDriver: false,
    }).start();
    setTimeout(() => dispatch(hideToast()), 360);
  };

  useEffect(() => {
    let timeoutId = null;
    if (show) {
      animateItem();
      timeoutId = setTimeout(() => {
        hideToastHandler();
      }, 5000);
    }

    return () => {
      clearTimeout(timeoutId);
      animationValue.setValue(0);
    };
  }, [show, dispatch, animationValue]);

  return (
    <>
      {show && (
        <Animated.View
          style={[
            styles.toast,
            {
              backgroundColor: colors[`${type}Subtle`],
              opacity: animationValue,
              transform: [{ translateY }],
            },
          ]}
        >
          <View style={styles.content}>
            <MaterialCommunityIcons
              style={styles.icon}
              name={iconobj[type]}
              color={colors[type]}
              size={22}
            />
            <Text style={[styles.text, { color: colors[type] }]}>
              {message}
            </Text>
          </View>
          <CloseButton  size={18} color={colors[type]} onPress={hideToastHandler} />
        </Animated.View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  toast: {
    position: "absolute",
    bottom: Platform.OS === "ios" ? 90 : 70,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "97%",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 6,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 3,
  },
  icon: {
    marginRight: 7,
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
  },
});
