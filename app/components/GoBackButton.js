import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons"
import colors from "../config/colors";

export default function GoBackButton ({navigation}){
    return (
        <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons 
                name="arrow-left" 
                size={30}
                color={colors.gray}
                />
                {/* <Text style={styles.text}>retourner</Text> */}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn:{
        flexDirection:'row',
        alignItems:'center'
    },
    text:{
        fontSize:22,
        fontWeight:'bold',
        color:colors.gray,
        marginLeft:5,
    }
})