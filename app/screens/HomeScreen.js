import React from "react";
import {  StyleSheet, View } from "react-native";
import { ServicesContainer, Screen ,PositionPicker, PackagesContainer} from "../components";

export default function HomeScreen({navigation})  {
    return (
      <Screen widthPadding safeArea> 
           {/* <Searchbar/> */}
           <View style={styles.positionContainer}>
              <PositionPicker/>
           </View>
           {/* <PackagesContainer /> */}
           <ServicesContainer navigation={navigation}/>  
      </Screen>
    )
}

const styles = StyleSheet.create({
  positionContainer:{
      alignItems:'center'
  }
});