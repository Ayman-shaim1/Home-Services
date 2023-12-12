import { useRef,useEffect } from "react"
import { StyleSheet, View,Animated } from "react-native"
import Heading from "./Heading"
import Rating from "./Rating"
import Label from "./Label"

export default function JobHistoryItem({index}) {

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
    return(
        <Animated.View
            style={{
                transform: [{ translateY }],
                opacity: animationValue,
            }} 
        >
        <View style={styles.jobHistoryItem}>
                <View style={styles.jobHistoryItemTextcontainer}>
                        <View style={styles.jobHistoryItemTextInfo}>
                            <Heading as="heading5" style={styles.textDuration} text={"Intitule de travaille"}/>
                            <Heading as="heading6" style={[styles.textDuration,{marginTop:10,}]} text={"De 2023-06-06 a 10:30 "} color={"gray"}/>
                            <Heading as="heading6" style={styles.textDuration}  text={"jusqu'a"} color="gray"/>
                            <Heading as="heading6" style={[styles.textDuration,{marginBottom:10}]} text="2023-06-06 a 13:30" color="gray"/>
                        </View>
                        <View style={styles.priceText}>
                            <Label as="heading6" text="100 MAD par heure" color="gray"/>
                            <Label as="heading6" text="400 MAD en total" color="gray"/>
                        </View>
                </View>
                <Rating number={5}/>
        </View> 
    </Animated.View>
       
    )
}

const styles = StyleSheet.create({
    jobHistoryItem:{
        marginVertical:20,
    },
    jobHistoryItemTextcontainer:{
        flexDirection:'row',
    },
    jobHistoryItemTextInfo:{
        width:'62%'
    },
    textDuration:{
        marginVertical:0,
    },
    priceText:{ 
        alignSelf:'center',
        marginTop:10,
    },
})