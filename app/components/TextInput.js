import React from "react";
import { StyleSheet,TextInput as RNTextInput, View, Text} from "react-native";
import colors from "../config/colors";
import { Ionicons } from '@expo/vector-icons';


export default function TextInput({ placeholder,label,icon, secure = false }){
    return (
        <View style={styles.container}> 
            {label && <Text style={styles.label}>{label}</Text>}
            <View style={styles.inputContainer}>
                {icon && <Ionicons  style={styles.icon} name={icon} size={14} color={colors.gray}/>}
                <RNTextInput
                    style={[styles.input,{
                        paddingLeft:icon ? 40 : 20
                    }]}
                    placeholder={placeholder}
                    secureTextEntry={secure}
                />    
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        marginVertical:7, 
    },
    inputContainer:{
        position:'relative',
        zIndex:100,
    },
    icon:{
       position:'absolute', 
       zIndex:1000,
       top:'35%',
       left:'4%'
    },
    label:{
        fontSize:16,
        fontWeight:'bold',
        marginBottom:5,
    },
    input:{
        paddingVertical:20,
        paddingRight:20,
        backgroundColor:colors.lightGray,
        borderRadius:10,
        fontSize:16,
    }
})