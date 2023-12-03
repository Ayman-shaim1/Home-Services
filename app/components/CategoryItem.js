import React from "react";
import { Text, Image, StyleSheet, TouchableOpacity} from "react-native";

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
        width:120,
        height:120,
        paddingVertical:25,
        paddingHorizontal:15,
        borderWidth:1,
        borderColor:'#D3D3D3',
        margin:5,
        alignItems:'center',
        borderRadius:5,
    },
    image:{
        width:40,
        height:40
    },
    text:{
        marginTop:10,
        fontSize:12,
        fontWeight:'bold'
    }
}) 
