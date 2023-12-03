import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";


export default function Diviser ({ withOr = false }){
    return (
        <View style={styles.line}>
            {withOr && <Text style={styles.orText}>or</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    line:{
        height:1,
        backgroundColor:colors.gray,
        marginVertical:18,
        zIndex:100,
        alignItems:'center',
    },
    orText:{
        width:50,
        height:18,
        textAlign:'center',
        backgroundColor:colors.white,   
        zIndex:1000,
        top: -10,
        fontSize:15,
        fontWeight:'bold'
    }
})