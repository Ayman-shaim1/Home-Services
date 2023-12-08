import React from "react";
import { View , Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import Rating from "./Rating";

export default function EmployeItem({ employe }) {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.wrapper}> 
                <Image source={employe.image} style={styles.image}/>
                <View style={styles.info}>
                    <Text style={styles.name}>
                        {employe.name}
                     </Text>
                    <Text style={styles.price}>{employe.price} per hour</Text>
                    <Rating number={employe.rating} style={styles.rating}/>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        marginBottom:20,
        paddingBottom:10,
        position:'relative',
        borderRadius:10,
        padding:10,
        borderBottomColor:colors.gray,
        borderBottomWidth:1,
    },
    wrapper:{
        flexDirection:'row',
    },
    image:{
        width:100,
        height:120,
        borderRadius:30,
        resizeMode:'cover'
    },
    info:{
        marginLeft:20,
    },
    name:{
        fontSize:20,
        fontWeight:'700',
        color:colors.black,
    },
    price:{
        fontSize:16,
        fontWeight:'600',
        color:colors.gray
    },
    activities:{
        marginLeft:50,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        right:10,
    },
    btn:{
        marginRight:5,
        width:160,
    },
    rating:{
       marginTop:15,
    }
})