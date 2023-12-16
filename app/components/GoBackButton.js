import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons"
import colors from "../config/colors";

export default function GoBackButton ({navigation,color = "lightGray"}){
    return (
        <TouchableOpacity style={[styles.btn,{backgroundColor:colors[color]}]} onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons 
                name="arrow-left" 
                size={20}
                color={colors.black}
                />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn:{
        flexDirection:'row',
        alignItems:'center',
        width:40,
        height:40,
        justifyContent:'center',
        borderRadius:10,
        marginBottom:10,
    },
    text:{
        fontSize:22,
        fontWeight:'bold',
        color:colors.gray,
        marginLeft:5,
    }
})