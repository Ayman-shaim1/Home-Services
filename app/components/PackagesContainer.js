import React from "react";
import { StyleSheet, View , ScrollView} from "react-native";
import colors from "../config/colors";
import Heading from "./Heading";

const PACKAGES = [
    {
        id:1,
        image:require("../assets/jardinage.jpeg"),
        title:'jardinage & menage '
    },
    {
        id:2,
        image:require("../assets/coach-massage.jpeg"),
        title:'coach & Kiné '
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
          
        <ScrollView 
            style={styles.listContainer}
            horizontal 
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false} 
            >
            {PACKAGES.map(item => (
                <PackageItem package={item}/>
            ))}
        </ScrollView>
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