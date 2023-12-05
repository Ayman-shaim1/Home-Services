import React from "react";
import { Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import colors from "../config/colors";

export default function CategoryItem ({category}) {
    return (
        <TouchableOpacity style={styles.category}>
            <Image source={category.icon} style={styles.image}/>
            <Text style={styles.text}>{category.name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    category:{
        width:105,
        height:105,
        paddingVertical:14,
        paddingHorizontal:15,
        borderWidth:1,
        borderColor:colors.gray,
        marginVertical:10,
        marginHorizontal:5,
        alignItems:'center',
        borderRadius:5,
    },
    image:{
        width:40,
        height:40
    },
    text:{
        marginTop:10,
        fontSize:15,
        fontWeight:'bold'
    }
}) 
