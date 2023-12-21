import React from "react";
import { TextInput as RNTextInput, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Label from "./Label";
import globalStyle from "../config/globalStyle";

export default function TextInput({
  textContentType,
  onFocus,
  onPressIn,
  placeholder,
  label,
  icon,
  keyboardType,
  secure = false,
  style,
  value,
}) {
  return (
    <View style={[globalStyle.input.container, style]}>
      {label && <Label style={globalStyle.input.label} color={"black"} text={label} />}
      <View style={globalStyle.input.inputContainer}>
        {icon && (
          <MaterialCommunityIcons
            style={globalStyle.input.icon}
            name={icon}
            size={18}
            color={colors.gray}
          />
        )}
        <RNTextInput
          style={[
            globalStyle.input.input,
            {
              paddingLeft: icon ? 40 : 20,
            },
          ]}
          onPressIn={onPressIn}
          onFocus={onFocus}
          keyboardType={keyboardType}
          textContentType={textContentType}
          placeholder={placeholder}
          secureTextEntry={secure}
          value={value}
        />
      </View>
    </View>
  );
}
