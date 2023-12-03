import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LogoImage from "../assets/service.png";
import { Button, Diviser, Heading,TextInput } from "../components";

export default function LoginScreen(){
    return (
        <View>
            
            <View style={styles.container}>
                <Image source={LogoImage} style={styles.logo}/>
                <Heading text={"Login"} as="heading4" /> 
                <Heading style={styles.subText} text={"please sign in to continue"} as={'heading6'} color={'gray'} />
            </View>
           
            <TextInput 
                label="email :"
                placeholder="enter email"
                icon="person"
               />

            <TextInput 
               icon="lock-closed"
               label="password :"
               placeholder="enter password" 
               type='password'
               secure={true}
               />
            
            <View style={styles.forgetPasswordContainer}>
                <TouchableOpacity style={styles.forgetPassword}>
                    <Text style={styles.forgetPasswordText}>forget password ?</Text>
                </TouchableOpacity>    
            </View>

            <Button text={"Login"} icon={"log-in"}/>
            <Button text={"Register"} color="secondary" icon={'person-add'} />
            
            <Diviser withOr/>
            
            <Button 
               text={"Login with gmail"}
               color="white"
               image={require("../assets/google.png")}
               />

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        margin:15,
    },
    subText:{
        marginTop:-5,
    },
    logo:{
        marginTop:10,
        width:80,
        height:80,
    },
    forgetPasswordContainer:{
        alignItems:'center',
    },
    forgetPassword:{
        margin:10,
    },
    forgetPasswordText:{
        fontSize:16,
        fontWeight:'bold'
    }
});