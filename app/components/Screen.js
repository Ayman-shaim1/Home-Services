import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View, ScrollView } from "react-native";

export default function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <ScrollView>
          <View style={[styles.view, style]}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    paddingHorizontal:15,
    paddingTop:20,
    flex: 1,
  },
});