import React from "react";
import Constants from "expo-constants";
import { SafeAreaView,ScrollView, View } from "react-native";

export default function Screen({ children, style, widthPadding = false ,safeArea = false}) {
  if(safeArea){
      return (
        <SafeAreaView 
          style={[style,{
            paddingTop: widthPadding ? Constants.statusBarHeight: 0,
            flex:1,
          }]}>
              <ScrollView 
              showsVerticalScrollIndicator={false}  // Set this to false to hide the vertical scroll bar
              showsHorizontalScrollIndicator={false} 
                style={[style,{
                    paddingTop:widthPadding ? 12 : 0,
                    paddingHorizontal:widthPadding ? 10 : 0,

                }]}>{children}</ScrollView>
        </SafeAreaView>
      );
  }
  else {
    return (
      <View style={[style,{
        paddingHorizontal:widthPadding ? 10 : 0,
        paddingTop: widthPadding ? Constants.statusBarHeight: 0,
        flex:1,
      }]}>
        <ScrollView 
        showsVerticalScrollIndicator={false}  // Set this to false to hide the vertical scroll bar
        showsHorizontalScrollIndicator={false} 
        style={[style,{
            paddingTop:widthPadding ? 12 : 0,
            paddingHorizontal:widthPadding ? 10 : 0,
        }]}>{children}</ScrollView>
      </View>
    )
  }
}
