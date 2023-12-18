import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";

export default function FloatButton({ icon, onPress }){
    return (
            <TouchableOpacity  style={styles.btn} onPress={onPress}>
                    <MaterialCommunityIcons name={icon} size={30} color={colors.white}/>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn:{
        backgroundColor:colors.primary,
        width:70,
        height:70,
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
        borderRadius:35,
        alignSelf:'flex-end',        
    }
})