import { Picker as RNPicker } from "@react-native-picker/picker";
import { useState } from "react";
import colors from "../config/colors";
import { Button, Platform, StyleSheet, View } from "react-native";
import Label from "./Label";
import globalStyle from "../config/globalStyle";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TextInput from "./TextInput";
import IOSPickerModal from "./IOSPickerModal";
import { padding } from "polished";

export default function Picker({
  placeholder,
  label,
  style,
  icon,
  value,
  onChange,
  items,
}) {
  const [open, setOpen] = useState(false);
  if (Platform.OS === "ios") {
    return (
      <View style={styles.iosContainer}>
        <TextInput
          icon={icon}
          placeholder={placeholder}
          label={label}
          onPressIn={() => setOpen(true)}
          value={value ? value : items[0]}
        />
        <MaterialCommunityIcons
          name="arrow-down-drop-circle"
          size={20}
          style={styles.iosIcon}
          color={colors.gray}
        />
        {open && (
          <IOSPickerModal visible={open} onClose={() => setOpen(false)}>
            <RNPicker selectedValue={value} onValueChange={onChange}>
              {items &&
                items.map((item, index) => (
                  <RNPicker.Item key={index} label={item} value={item} />
                ))}
            </RNPicker>
            <Button title="fermer" onPress={() => setOpen(false)} />
          </IOSPickerModal>
        )}
      </View>
    );
  } else {
    return (
      <View style={[globalStyle.input.container, style]}>
        {label && (
          <Label style={globalStyle.input.label} color={"black"} text={label} />
        )}
        <View style={globalStyle.input.inputContainer}>
          {icon && (
            <MaterialCommunityIcons
              style={globalStyle.input.icon}
              name={icon}
              size={18}
              color={colors.gray}
            />
          )}
          <View
            style={[
              { ...globalStyle.input.input, paddingVertical: 7 },
              {
                paddingLeft: icon ? 40 : 20,
              },
            ]}
          >
            <RNPicker
              style={{ padding: 0 }}
              selectedValue={value}
              onValueChange={onChange}
            >
              {items &&
                items.map((item, index) => (
                  <RNPicker.Item key={index} label={item} value={item} />
                ))}
            </RNPicker>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iosIcon: {
    position: "absolute",
    top:'50%',
    right:'5%',
  },
  iosContainer: { 
    position: "relative", 
},
});
