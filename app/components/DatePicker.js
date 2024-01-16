import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import TextInput from "./TextInput";
import { Button, Modal, Platform, StyleSheet, Text, View } from "react-native";
import CloseButton from "./CloseButton";
import colors from "../config/colors";
import IOSPickerModal from "./IOSPickerModal";

export default function DatePicker({
  icon,
  mode = "date",
  minimumDate,
  placeholder,
  label,
}) {
  const [chosenDate, setChosenDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || chosenDate;
    if (mode !== "time") {
      setOpen(false);
      setShowModal(false);
    }
    if (Platform.OS === "android") {
      setOpen(false);
      setShowModal(false);
    }
    setChosenDate(new Date(currentDate));
  };

  const onCancel = () => {
    setOpen(false);
    setShowModal(false);
  };

  const onOpen = () => {
    setOpen(true);
    setShowModal(true);
  };

  return (
    <>
      <TextInput
        icon={icon}
        label={label}
        placeholder={placeholder}
        onPressIn={onOpen}
        value={
          mode === "time"
            ? chosenDate.toLocaleTimeString("en-US", {
                hour: "2-digit",
                hour12: false,
                minute: "2-digit",
              })
            : chosenDate.toLocaleDateString()
        }
      />

      {open && (
        <>
          {Platform.OS === "ios" ? (
            <IOSPickerModal visible={showModal} onClose={onCancel} >
              <DateTimePicker
                themeVariant="light"
                minimumDate={minimumDate}
                mode={mode}
                display={
                  mode === "time" && Platform.OS === "ios"
                    ? "spinner"
                    : "inline"
                }
                onChange={onChange}
                value={chosenDate}
                onCancel={onCancel}
              />
              {mode === "time" && <Button title="fermer" onPress={onCancel} />}
            </IOSPickerModal>
          ) : (
            <DateTimePicker
              themeVariant="light"
              minimumDate={minimumDate}
              mode={mode}
              display={
                mode === "time" && Platform.OS === "ios" ? "spinner" : "inline"
              }
              onChange={onChange}
              value={chosenDate}
              onCancel={onCancel}
            />
          )}
        </>
      )}
    </>
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
  btnClose: {
    alignSelf: "flex-end",
  },
  modalContent: {
    backgroundColor: colors.white,
    top: "50%",
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
