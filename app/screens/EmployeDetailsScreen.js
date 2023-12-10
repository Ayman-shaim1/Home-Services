import { Image, StyleSheet, View } from "react-native";
import {  Button, Heading, Rating, Screen } from "../components";

export default function EmployeDetailsScreen () {
        return (
            <Screen style={styles.container}>
                <Image source={require('../assets/emp1.jpeg')} style={styles.image}/>
                <View style={styles.center}>
                    <Heading as="heading5" text="Jhon Doe" style={{ marginBottom:-5 }} />
                </View>
                <View style={styles.center}>
                    <Heading as="heading6" text="200 mad par heure" style={styles.text} color="gray"/>
                </View>
                <View style={styles.center}>
                     <Rating number={5} style={styles.rating}/>
                </View>
                <View style={styles.center}>
                     <Heading as="heading6" text="total de travail effectue : 55" />
               </View>
               <Button text={"demander"} icon={'send'}/>
            </Screen>
        );
}

const styles = StyleSheet.create({
   
    image:{
        width:'100%',
        height:250,
        borderRadius:12,
    },
    text:{
        marginTop:5,    
    },
    center:{
        alignItems:'center',
    },
    description:{
        textAlign:'justify',
        fontSize:14,
        fontWeight:'400'
    },
    rating:{
        marginTop:-7
    }
})