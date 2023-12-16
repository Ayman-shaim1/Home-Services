import { StyleSheet,TouchableOpacity} from "react-native";
import Heading from "./Heading";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function PositionPicker(){
    return (
        <TouchableOpacity style={styles.positionPicker}>
            <MaterialCommunityIcons style={styles.icon} name="map-marker" size={18} color={colors.gray}/>
            <Heading color="gray" as="heading6" text={"ville xxx avenue xx xxx xxx"}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    positionPicker:{
        flexDirection:'row',
        alignItems:'center',
    },
    icon:{
        marginRight:5
    }
})