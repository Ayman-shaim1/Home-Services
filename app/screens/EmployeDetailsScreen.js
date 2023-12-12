import { Image, StyleSheet, View } from "react-native";
import {  Button, Diviser, GoBackButton, Heading, JobHistoryContainer,  Rating, Screen } from "../components";

export default function EmployeDetailsScreen ({ navigation }) {
        return (
            <Screen style={styles.container}>
                <GoBackButton navigation={navigation}/>
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
                
                <Button text={"Travailler avec Jhon Doe"} icon={'send'}/>
                
                <Diviser/>
                
                <JobHistoryContainer/>

            </Screen>
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
    },
    
   
})