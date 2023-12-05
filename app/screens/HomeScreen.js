import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { CategoriesContainer, PackagesContainer, Searchbar } from "../components";
import colors from "../config/colors";

export default function HomeScreen()  {
    return (
       <View style={styles.container}>
         <Searchbar/>
         <ScrollView style={styles.scroller}>
            <CategoriesContainer/>
            <PackagesContainer/>
         </ScrollView>
       </View>
    )
}

const styles = StyleSheet.create({
  scroller:{
    marginTop:10,
    paddingVertical:25,
    borderRadius:15,
  },
  container:{
    flex:1,
    backgroundColor:colors.backgroundColor,
    paddingBottom:10,
  }
});