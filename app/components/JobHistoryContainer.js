import { StyleSheet, View } from "react-native";
import JobHistoryItem from "./JobHistoryItem";
import Heading from "./Heading";


export default function jobHistoryContainer(){
    return (
        <View style={styles.jobHistoryContainer}>
            <Heading as="heading4" text="Historique de travail"/>
            <JobHistoryItem/>              
            <JobHistoryItem/>              
            <JobHistoryItem/>              
            <JobHistoryItem/>              
            <JobHistoryItem/>              
        </View>
    );
}


const styles = StyleSheet.create({
    jobHistoryContainer:{
        marginTop:10,
        marginBottom:100,
    },
})