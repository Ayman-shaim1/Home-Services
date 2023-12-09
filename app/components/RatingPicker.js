import { Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { useState } from "react";
import Label from "./Label";

export default function RatingPicker ({ style,label, number, setNumber,size= 34 }){

    return (
        <>
            {label && <Label  text={label}/>}
            <View style={[{ flexDirection:'row' ,marginBottom:10},{ ...style }]}>
                {
                    Array.from({ length: number }, (_, index) => (
                    <TouchableOpacity 
                            key={index}
                            onPress={() => setNumber(index + 1)}>
                                <MaterialCommunityIcons 
                                    color={colors.secondary} 
                                    name='star' 
                                    size={size}/> 
                    </TouchableOpacity>
                    ))
                }
                {
                    Array.from({ length: 5 - number }, (_, indexY) => (
                        <TouchableOpacity
                            key={indexY}
                            onPress={() => setNumber(number + indexY + 1)}>
                                <MaterialCommunityIcons 
                                    key={indexY}
                                    color={colors.secondary} 
                                    name='star-outline' 
                                    size={size}/> 
                        </TouchableOpacity>  
                    ))
                }
            </View>
        </>
        
    )

}