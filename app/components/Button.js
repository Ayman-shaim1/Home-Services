import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import { Ionicons } from '@expo/vector-icons';


export default function Button ({ text, color = 'primary', image, icon}){
    return (
        <TouchableOpacity 
             style={[styles.btn,{
             backgroundColor:colors[color],
             borderColor:color === 'white' ? colors.gray : colors[color]
            }]}>
            {image && <Image source={image} style={styles.image}/>}
            {icon && <Ionicons style={styles.icon} name={icon} size={18} color={color === 'white' ? colors.gray : colors.white}/>}
            <Text 
              style={[styles.text,{
                color:color === 'white' ? colors.black : colors.white
                }]}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles  = StyleSheet.create({
    icon:{
        marginRight:5,
    },
    btn:{
        paddingVertical:20,
        alignItems:'center',
        // backgroundColor:colors.primary,
        borderRadius:15,
        marginVertical:4,
        borderWidth:1,
        flexDirection:'row',
        justifyContent:'center'
    },
    text:{
        fontSize:15,
        fontWeight:'bold',
        // textTransform:'uppercase'
    },
    image:{
        width:18,
        height:18,
        marginRight:10,
    }
})