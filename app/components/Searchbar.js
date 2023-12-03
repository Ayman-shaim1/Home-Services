import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";


export default function Searchbar (){
    return (
        <View style={styles.container}>
            <TextInput placeholder="search here ..." style={styles.textInput}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
    },
    textInput:{
        borderWidth:1,
        padding:16,
        borderRadius:5,
        borderColor:'#D3D3D3',
        fontSize:16,
    }
})