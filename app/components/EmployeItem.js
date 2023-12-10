import React, { useEffect, useRef } from "react";
import { View , Text, StyleSheet, Image, TouchableOpacity, Animated } from "react-native";
import colors from "../config/colors";
import Rating from "./Rating";

export default function EmployeItem({ employe ,index}) {

    const animationValue = useRef(new Animated.Value(0)).current;
    const animateItem = () => {
        Animated.timing(animationValue, {
          toValue: 1,
          duration: 500,
          delay: index * 200, // Adjust the delay for staggered animation
          useNativeDriver: false,
        }).start();
      };
      
    const translateY = animationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [100, 0], // You can customize the animation as needed
    });

 
    useEffect(() => {
      animateItem(1); // Trigger animation when the component mounts
    }, []);

    return (
        <Animated.View
            style={{
                transform: [{ translateY }],
                opacity: animationValue,
            }} 
        >
            <TouchableOpacity style={styles.container}>
                <View style={styles.wrapper}> 
                    <Image source={employe.image} style={styles.image}/>
                    <View style={styles.info}>
                        <Text style={styles.name}>
                            {employe.name}
                        </Text>
                        <Text style={styles.price}>
                            {employe.price} MAD par heure
                        </Text>
                        <Rating number={employe.rating} style={styles.rating}/>
                    </View>
                </View>
            </TouchableOpacity>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginBottom:20,
        position:'relative',
        borderRadius:10,
        paddingVertical:5,
    },
    wrapper:{
        flexDirection:'row',
    },
    image:{
        width:80,
        height:80,
        borderRadius:15,
        resizeMode:'cover'
    },
    info:{
        marginLeft:15,
    },
    name:{
        fontSize:21,
        fontWeight:'800',
        color:colors.black,
    },
    price:{
        fontSize:14,
        fontWeight:'700',
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
    
})