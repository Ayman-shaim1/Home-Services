import React from "react";
import { View, StyleSheet } from "react-native";
import { CategoriesContainer, Searchbar } from "../components";

export default function HomeScreen()  {
    return (
       <View>
         {/* <Searchbar/> */}
         <CategoriesContainer/>
       </View>
    )
}

const styles = StyleSheet.create({
  
});