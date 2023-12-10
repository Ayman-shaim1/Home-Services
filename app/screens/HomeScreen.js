import React from "react";
import { View, StyleSheet } from "react-native";
import { ServicesContainer, Searchbar, Screen } from "../components";

export default function HomeScreen()  {
    return (
       <Screen>
         {/* <Searchbar/> */}
         <ServicesContainer/>
       </Screen>
    )
}

const styles = StyleSheet.create({
  
});