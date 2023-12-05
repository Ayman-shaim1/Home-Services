import React from "react";
import { StyleSheet,   View } from "react-native";
import colors from "../config/colors";
import Heading from "./Heading";
import TextInput from "./TextInput";
export default function Searchbar (){
    return (
        <View style={styles.container}>
            
            <Heading 
                as="heading5"
                text={"Chercher un de nous service"} 
                color="white" />
                
            <TextInput 
                icon="search"
                placeholder="chercher un service ..." 
                style={styles.textInput}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        paddingHorizontal:15,
        paddingTop:'7%',
        width:'100%',
        height:190,
        justifyContent:'center',
        borderBottomLeftRadius:16,
        borderBottomRightRadius:16,
    },
    textInput:{
        marginTop:-2,
    }
})