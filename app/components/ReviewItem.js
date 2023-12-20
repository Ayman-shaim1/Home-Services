import { useRef, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Animated,
  TouchableOpacity,
  Image,
} from "react-native";
import Heading from "./Heading";
import Rating from "./Rating";
import Label from "./Label";
import BottomModal from "./BottomModal";

export default function ReviewItem({ index }) {
  const [showBottomModal, setShowBottomModal] = useState(false);

  const animationValue = useRef(new Animated.Value(0)).current;
  const animateItem = () => {
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 500,
      delay: index * 200,
      useNativeDriver: false,
    }).start();
  };

  const translateY = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0],
  });

  useEffect(() => {
    animateItem(1);
  }, []);
  return (
    <Animated.View
      style={{
        transform: [{ translateY }],
        opacity: animationValue,
      }}
    >
      <TouchableOpacity
        onPress={() => setShowBottomModal(true)}
        style={styles.jobHistoryItem}
      >
        <Image
          source={require("../assets/user.png")}
          style={styles.userImage}
        />
        <View style={styles.jobHistoryItemTextInfo}>
          <Label style={styles.textDuration} text={"Jhon Doe"} />
          <Rating number={5} />
        </View>
        <View>
          <Label
            style={styles.comment}
            text={"Lorem ipsum dolor sit amet ..."}
            color={"gray"}
          />
        </View>
      </TouchableOpacity>

      <BottomModal
        visible={showBottomModal}
        onClose={() => setShowBottomModal(false)}
      >
        <View
          onPress={() => setShowBottomModal(true)}
          style={styles.jobHistoryItem}
        >
          <Image
            source={require("../assets/user.png")}
            style={styles.userModalImage}
          />
          <View style={styles.jobHistoryItemTextInfo}>
            <Heading
              as="heading6"
              style={styles.textDuration}
              text={"Jhon Doe"}
            />
            <Rating number={5} />
          </View>
          <View style={{ marginTop: 10 }}>
            <Label
              text={
                "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet "
              }
              color={"gray"}
            />
          </View>
        </View>
      </BottomModal>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  reviewItem: {
    marginVertical: 20,
  },
  userImage: {
    width: 35,
    height: 35,
    marginBottom: 10,
  },
  userModalImage: {
    width: 50,
    height: 50,
  },
  comment: {
    marginTop: 20,
  },
  reviewItemextInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textDuration: {
    marginVertical: 0,
  },
  priceText: {
    alignSelf: "center",
    marginTop: 10,
  },
});
