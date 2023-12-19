import { StyleSheet,TouchableOpacity} from "react-native";
import Heading from "./Heading";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import Label from "./Label";
import { useAddress, useLocation } from "../hooks"
import { useEffect, useState } from "react";


export default function PositionPicker(){
  const { location, errorMsg } = useLocation();
  const getAddressFromCoordinates  = useAddress();
  const [text,setText] = useState("waiting ...");

  useEffect(() => {
      if (errorMsg) {
        setText(errorMsg);
      } else if (location) {
        getAddressFromCoordinates(location.latitude,location.latitude).then((address) => {
          setText(address);
        }).catch(err => {
          setText(err)
        })
        callonce = true;
    }
  },[location,errorMsg])

 

    return (
        <TouchableOpacity style={styles.positionPicker}>
            <MaterialCommunityIcons style={styles.icon} name="map-marker" size={18} color={colors.gray}/>
            <Label color="gray" as="heading6" text={text}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    positionPicker:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:15,
    },
    icon:{
        marginRight:5
    }
})