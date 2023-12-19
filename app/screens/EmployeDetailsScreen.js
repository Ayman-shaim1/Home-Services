import {  Image, ScrollView, StyleSheet, View } from "react-native";
import {  Diviser, FloatButton, GoBackButton, Heading, ReviewContainer,  Label,  Rating, Screen, DiplomaContainer, BottomModal, TextInput, Button, DatePicker, PositionPicker } from "../components";
import { useState } from "react";

export default function EmployeDetailsScreen ({ navigation }) {

    const [showBottomModal,setShowBottomModal] = useState(false);
    const confirmHandler = () => {
        alert("Hello world");
        setShowBottomModal(false);
    }
    return ( 
            <>
                <Screen widthPadding safeArea style={{ paddingTop:10}}> 
                    <GoBackButton navigation={navigation}/>
                    <Image source={require('../assets/emp1.jpeg')} style={styles.image}/>
                    <View style={styles.textContainer}>
                        <Heading as="heading6" text={"Jhon Doe  (Jardinier) "}/>
                        <Rating number={5}  />
                    </View>
                    <View style={{ marginBottom:0 }}>
                        <Label as="heading6" text="Age:45"/>
                    </View>
                    <View style={{ marginBottom:20 }}>
                         <Label as="heading6" text={"Nombre de travaux effectués : (20)"}/>
                    </View>
                    <DiplomaContainer/>
                    <View>
                        <Heading as="heading6" text={"Description"}/>
                        <Label 
                            color={"gray"}
                            text={"Lorem ipsum Lorem ipsumipsum dolor sit amet, consectetur adipiscing elit. Pellentesque bibendum elit sodales dolor consectetur, eget maximus enim placerat. Sed dictum nisl dui, efficitur euismod dui dictum ut. "}/>
                    </View>
                    <Diviser />
                  <View style={{marginBottom:200}}>
                       <ReviewContainer/>
                  </View>
                    
                </Screen>
                <View style={styles.btncontainer}>
                   <FloatButton icon={"check-network"} onPress={() => setShowBottomModal(true)}/>
                </View>

                <BottomModal top={20} visible={showBottomModal} onClose={() => setShowBottomModal(false)}>
                    <ScrollView>
                        <Heading text={"valide votre demande"} as="heading5"/>
                        <DatePicker icon={"calendar"}  placeholder={"veuillez saisire une date"} label={"date"}/>
                        <DatePicker mode="time"  icon={"calendar-clock"} placeholder={"veuillez saisire une heure de depart"} label={"heure de depart"}/>
                        <TextInput  icon={"cash"} keyboardType={"numeric"} placeholder={"veuillez saisire le prix par heure"} label={"prix mar heure"}/>
                        <TextInput  icon={"clipboard-clock"}  keyboardType={"numeric"} placeholder={"veuillez saisire le nombre d'heures de travaille"} label={"nombre d'heures de travaille"}/>
                        <View style={{marginVertical:10}}>
                            <Label text={"votre position"}/>
                                <PositionPicker/>
                        </View>
                        <Button icon={"check-network"} text={"confirmer"}  onPress={confirmHandler}/>
                    </ScrollView>
                </BottomModal>
            </>
            );
}

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:250,
        borderRadius:12,
        marginTop:10,
    },
    text:{
        marginTop:5,    
    },
    textContainer:{ 
        marginTop:10,
        justifyContent:'space-between' ,
        alignItems:'center',
        flexDirection:'row',
    },
    center:{
        alignItems:'center',
    },
    end:{
        alignItems:'flex-end',
    },
    description:{
        textAlign:'justify',
        fontSize:14,
        fontWeight:'400'
    },
    rating:{
        marginTop:-7
    },
    btncontainer:{
        position:'absolute',
        bottom:2,
        width:'98%',
        marginHorizontal:4,
    }
})