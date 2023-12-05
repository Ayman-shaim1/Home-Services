import React from "react";
import { StyleSheet, View ,FlatList} from "react-native";
import colors from "../config/colors";
import { PackageItem,Heading } from "../components";

const PACKAGES = [
    {
        id:1,
        image:require("../assets/jardinage.jpeg"),
        title:'jardinage & menage '
    }
]


export default function PackagesContainer (){
    return (
        <View style={styles.container}>
        <Heading text="Paquets" as="heading5"/>
        
        <Heading 
          style={styles.headingText1}
          text="Un paquet est un ensemble de services. Veuillez choisir l'un de nos paquets." 
          as="heading6" 
          color="gray"/>        
          
        <View style={styles.listContainer}>
            <FlatList
              data={PACKAGES}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <PackageItem package={item} />}
              numColumns={3}
              scrollEnabled={false}
            />
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.white,
        marginTop:10,
        paddingVertical:10,
        paddingBottom:15,
        margin:10,
        borderRadius:10,
      },
      listContainer:{
        marginTop:15,
        margin:10,
        paddingHorizontal:5,
        borderRadius:10,
      },
      headingText1:{
        marginTop:-2,
        marginBottom:0,
      }
})