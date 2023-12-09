import { StyleSheet, Text } from "react-native";
import colors from "../config/colors";

export default function Label({ text, color}){
    return <Text style={[{color:colors[color]},styles.label]}>{text}</Text>
}

const styles = StyleSheet.create({
    label:{
        fontSize:16,
        fontWeight:'400',
        marginStart:3,
        marginBottom:5,
    }
})