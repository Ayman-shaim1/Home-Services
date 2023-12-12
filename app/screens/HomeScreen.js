import React from "react";
import { View, StyleSheet } from "react-native";
import { ServicesContainer, Searchbar, Screen } from "../components";

export default function HomeScreen({navigation})  {
    return (
       <Screen>
         {/* <Searchbar/> */}
         <ServicesContainer navigation={navigation}/>
       </Screen>
    )
}

const styles = StyleSheet.create({
  
});