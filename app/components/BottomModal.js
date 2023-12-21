import { useRef, useEffect, useState } from "react";
import { Modal, StyleSheet, View, PanResponder } from "react-native";
import CloseButton from "./CloseButton";
import colors from "../config/colors";


export default function BottomModal({
  visible = false,
  children,
  onClose,
  top = 45,
}) {
  const [dragY, setDragY] = useState(0);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        setDragY(gestureState.dy);
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy >= 300) {
          onClose();
        } else {
          setDragY(0);
        }
      },
    })
  ).current;

  useEffect(() => {
    if (visible) {
      setDragY(0);
    }
  }, [visible]);

  return (
    <Modal
      visible={visible}
      style={styles.modal}
      animationType="fade"
      transparent={true}
    >
      <View style={styles.overlay}>
        <View
          style={[
            styles.modalWrapper,
            {
              transform: [{ translateY: Math.max(dragY, 0) }],
              top: `${top}%`,
            },
          ]}
          {...panResponder.panHandlers}
        >
          <View style={styles.modalContent}>
            <View style={styles.line}></View>
            <CloseButton style={styles.btnClose} onPress={onClose} />
            {children}
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    marginTop: "100%",
    backgroundColor: colors.primary,
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    flex: 1,
  },
  modalWrapper: {
    paddingTop: 5,
    // top:'45%',
    height: "100%",
    backgroundColor: colors.secondary,
    borderRadius: 20,
  },
  btnClose: {
    alignSelf: "flex-end",
  },
  modalContent: {
    backgroundColor: colors.white,
    height: "100%",
    padding: 10,
    borderRadius: 20,
  },
  line: {
    height: 4,
    width: 70,
    backgroundColor: colors.gray,
    alignSelf: "center",
    borderRadius: 10,
  },
});
