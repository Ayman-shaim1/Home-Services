import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LogoImage from "../assets/service.png";
import { Button,  GoBackButton, Heading,ImagePicker,Screen,TextInput } from "../components";
import colors from "../config/colors";


export default function RegisterScreen({navigation}){
    return (
        <Screen widthPadding safeArea>
             <GoBackButton navigation={navigation}/>
           <View style={styles.container}>
                <Image source={LogoImage} style={styles.logo}/>
                <Heading text={"Sign up"} as="heading5" /> 
                <Heading 
                    style={styles.subText}
                    text={"entrer votre informations pour s'inscrire"}
                    as={'heading6'} 
                    color={'gray'} />
            </View>
            <ImagePicker label={"image"}/>
            <TextInput 
                label="nom"
                placeholder="entrer votre nom "
                icon="account"
               />

            <TextInput 
                label="email"
                placeholder="entrer un email"
                icon="email"
               />

            <TextInput 
                label="Telephone"
                placeholder="entrer un numero de telephone"
                icon="phone"
               />


            <TextInput 
               icon="lock"
               label="mot de passe"
               placeholder="entrer le mot de passe" 
               type='password'
               secure={true}
               />

            <TextInput 
               icon="lock-check"
               label="confirmer le mot de passe"
               placeholder="entrer le mot de passe de confirmation" 
               type='password'
               secure={true}
               />
               <Button text={'register'} icon={'login'}/>

               <View style={styles.signinTextContainer}>
                <Text style={styles.signinText}>
                    aleady have an account 
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("login")}>
                        <Text style={[styles.signinText,styles.signinTextBtn]}>sign in</Text>
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
    signinTextContainer:{
        flexDirection:'row',
        justifyContent:'center',
        marginVertical:10,
    },
    signinText:{
        fontSize:16,
        fontWeight:'bold'
    },
    signinTextBtn:{
        marginLeft:3,
        color:colors.secondary,
        marginBottom:40,
    }
});