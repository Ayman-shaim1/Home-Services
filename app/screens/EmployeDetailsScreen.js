import { Image, StyleSheet, View } from "react-native";
import {  Button, Diviser, GoBackButton, Heading, JobHistoryContainer,  Label,  Rating, Screen } from "../components";

export default function EmployeDetailsScreen ({ navigation }) {
        return ( 
            <>
                <Screen widthPadding safeArea style={{ paddingHorizontal:10 }}> 
                    <GoBackButton navigation={navigation}/>
                    <Image source={require('../assets/emp1.jpeg')} style={styles.image}/>
                    <View style={styles.textContainer}>
                        <Heading as="heading6" text={"Jhon Doe  (Jardinier) "}/>
                        <Rating number={5}  />
                    </View>
                    <View style={{ marginBottom:0 }}>
                        <Heading as="heading6" text="Age:45"/>
                    </View>
                    <View style={{ marginBottom:20 }}>
                         <Heading as="heading6" text={"Nombre de service fait (20)"}/>
                    </View>
                    <View>
                        <Label text={"Description"}/>
                        <Label color={"gray"} text={"Lorem ipsum Lorem ipsumipsum dolor sit amet, consectetur adipiscing elit. Pellentesque bibendum elit sodales dolor consectetur, eget maximus enim placerat. Sed dictum nisl dui, efficitur euismod dui dictum ut. "}/>
                    </View>
                    <Diviser />
                    <JobHistoryContainer/>
                    
                </Screen>
                <Button icon={"send"} style={styles.btnWork} text={`Travailler avec M. Jhon Doe`}/>
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
    btnWork:{
        position:'absolute',
        bottom:2,
        width:'98%',
        marginHorizontal:4,
    }
})