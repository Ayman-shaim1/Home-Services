import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import TextInput from "./TextInput";
import { Button, Platform, Text } from "react-native";

export default function DatePicker({
  icon,
  mode = "date",
  minimumDate,
  placeholder,
  label,
}) {
  const [chosenDate, setChosenDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || chosenDate;
    if (Platform.OS === "android") setOpen(false);

    setChosenDate(new Date(currentDate));
  };

  const onCancel = () => {
    setOpen(false);
    // Perform any additional actions you want when the Cancel button is pressed
    console.log("Date picker cancelled");
  };

  return (
    <>
      <TextInput
        icon={icon}
        label={label}
        placeholder={placeholder}
        onPressIn={() => setOpen(true)}
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
          {Platform.OS === "ios" && (
            <Button title="fermer" onPress={() => setOpen(false)} />
          )}
        </>
      )}
    </>
  );
}
