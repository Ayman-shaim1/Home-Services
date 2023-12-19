import { StyleSheet, View } from "react-native";
import ReviewItem from "./ReviewItem";
import Heading from "./Heading";


export default function ReviewContainer(){
    return (
        <View style={styles.jobHistoryContainer}>
            <Heading style={styles.heading} as="heading5" text="Commentaires"/>
            <ReviewItem/>              
            <ReviewItem/>                          
        </View>
    );
}


const styles = StyleSheet.create({
    reviewContainer:{
        marginTop:10,
    },
    heading:{
        marginBottom:15,
    }
})