import { Platform, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import CloseButton from "./CloseButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const iconobj = {
    success:'check-circle',
    warning:'alert-circle',
    danger:'close-circle',
}


export default function Toast(){

    
    return (
        <View style={[styles.toast,{backgroundColor:colors[type]}]}>
               <View style={styles.content}>
                    <MaterialCommunityIcons
                        style={styles.icon}
                        name={iconobj[type]}
                        color={colors.white} 
                        size={21}/>
                     <Text style={styles.text}></Text>
               </View>
                <CloseButton color="white"/>
        </View>
    );
}

const styles = StyleSheet.create({
    toast:{
        position:'absolute',
        bottom:Platform.OS ==="ios" ? 90 : 70,
        alignSelf:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'94%',
        paddingVertical:12,
        paddingHorizontal:10,
        borderRadius:6
    },
    content:{
        flexDirection:'row',
        alignItems:'center',
    },
    icon:{
        marginRight:7
    },
    text:{
        fontSize:18,
        color:colors.white,
        fontWeight:'500',
    }
})