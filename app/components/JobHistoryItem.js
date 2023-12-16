import { useRef,useEffect, useState } from "react"
import { StyleSheet, View,Animated, TouchableOpacity } from "react-native"
import Heading from "./Heading"
import Rating from "./Rating"
import Label from "./Label"
import BottomModal from "./BottomModal"

export default function JobHistoryItem({index}) {
    const [showBottomModal,setShowBottomModal] = useState(false);

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
        <TouchableOpacity onPress={() => setShowBottomModal(true)} style={styles.jobHistoryItem}>
            <View style={styles.jobHistoryItemTextInfo}>
                <Label as="heading5" style={styles.textDuration} text={"Intitule de travaille"}/>
                <Rating number={5}/>
            </View>
            <View>
                <Label text={'Lorem ipsum dolor sit amet ...'} color={"gray"}/>
            </View>
        </TouchableOpacity> 

        <BottomModal visible={showBottomModal} onClose={()=> setShowBottomModal(false)}>

        </BottomModal>
    </Animated.View>
       
    )
}

const styles = StyleSheet.create({
    jobHistoryItem:{
        marginVertical:20,
    },

    jobHistoryItemTextInfo:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    textDuration:{
        marginVertical:0,
    },
    priceText:{ 
        alignSelf:'center',
        marginTop:10,
    },
})