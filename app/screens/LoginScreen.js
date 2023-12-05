import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LogoImage from "../assets/service.png";
import { Button, Diviser, Heading,Screen,TextInput } from "../components";
import colors from "../config/colors";

export default function LoginScreen(){
    return (
        <Screen>
            <View style={styles.container}>
                <Image source={LogoImage} style={styles.logo}/>
                <Heading text={"Login"} as="heading5" /> 
                <Heading style={styles.subText} 
                  text={"veuillez connecter pour continue"} 
                  as={'heading6'} color={'gray'} />
            </View>
        
            <TextInput 
                label="email"
                placeholder="entrer un email"
                icon="mail"
                keyboardType="email-address"
               />

            <TextInput 
               icon="lock-closed"
               label="mot de passe"
               placeholder="enter le mot de passe" 
               type='password'
               secure={true}
               />
            
            <View style={styles.forgetPasswordContainer}>
                <TouchableOpacity style={styles.forgetPassword}>
                    <Text style={styles.forgetPasswordText}>forget password ?</Text>
                </TouchableOpacity>    
            </View>

            <Button text={"Login"} icon={"log-in"}/>

            <Diviser withOr/>            
            
            <Button 
               text={"Login with gmail"}
               color="white"
               image={require("../assets/google.png")}
               />

            <View style={styles.signupTextContainer}>
                <Text style={styles.signupText}>
                    new customer  
                </Text>
                <TouchableOpacity>
                        <Text style={[styles.signupText,styles.signupTextBtn]}>sign up</Text>
                </TouchableOpacity>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        margin:7,
    },
    subText:{
        marginTop:-5,
    },
    logo:{
        marginTop:10,
        width:90,
        height:90,
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
    },
    signupTextContainer:{
        flexDirection:'row',
        justifyContent:'center',
        marginVertical:10,
    },
    signupText:{
        fontSize:16,
        fontWeight:'bold'
    },
    signupTextBtn:{
        marginLeft:3,
        color:colors.secondary
    }
});