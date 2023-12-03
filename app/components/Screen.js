import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View } from "react-native";

export default function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    paddingHorizontal:10,
  },
  view: {
    paddingTop:20,
    flex: 1,
  },
});