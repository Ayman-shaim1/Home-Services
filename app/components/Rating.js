import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function Rating({ number }){
    return (
        <View style={{flexDirection:'row'}}>
             {number === 1 ? 
                <MaterialCommunityIcons color={colors.secondary} name='star' size={16}/> :
                number === 1.5 ? 
                <>
                    <MaterialCommunityIcons color={colors.secondary} name='star' size={16}/>
                    <MaterialCommunityIcons color={colors.secondary}  name="star-half-full" size={16} />
                </> :
                number === 2 ? 
                <>
                    <MaterialCommunityIcons color={colors.secondary} name="star" size={16}/>
                    <MaterialCommunityIcons color={colors.secondary} name="star" size={16}/>
                </> :
                number === 2.5 ?
                <>
                    <MaterialCommunityIcons color={colors.secondary} name="star" size={16}/>
                    <MaterialCommunityIcons color={colors.secondary} name="star" size={16}/>
                    <MaterialCommunityIcons color={colors.secondary}  name="star-half-full" size={16} />

                </> :
                number === 3 ? 
                <>
                    <MaterialCommunityIcons color={colors.secondary} name="star" size={16}/>
                    <MaterialCommunityIcons color={colors.secondary} name="star" size={16}/>
                    <MaterialCommunityIcons color={colors.secondary} name="star" size={16}/>
                </> :
                number === 3.5 ?
                <>
                    <MaterialCommunityIcons color={colors.secondary} name="star" size={16}/>
                    <MaterialCommunityIcons color={colors.secondary} name="star" size={16}/>
                    <MaterialCommunityIcons color={colors.secondary} name="star" size={16}/>
                    <MaterialCommunityIcons color={colors.secondary}  name="star-half-full" size={16} />
                </> :
                number === 4 ?
                <>
                    <MaterialCommunityIcons color={colors.secondary} name="star" size={16}/>
                    <MaterialCommunityIcons color={colors.secondary} name="star" size={16}/>
                    <MaterialCommunityIcons color={colors.secondary} name="star" size={16}/>
                    <MaterialCommunityIcons color={colors.secondary} name="star" size={16}/>
                </> :
                number === 4.5 ?
                <>
                    <MaterialCommunityIcons color={colors.secondary} name="star" size={16}/>
                    <MaterialCommunityIcons color={colors.secondary} name="star" size={16}/>
                    <MaterialCommunityIcons color={colors.secondary} name="star" size={16}/>
                    <MaterialCommunityIcons color={colors.secondary} name="star" size={16}/>
                    <MaterialCommunityIcons color={colors.secondary}  name="star-half-full" size={16} />
                </> :
                number === 5 &&
                <>
                    <MaterialCommunityIcons color={colors.secondary} name="star" size={16}/>
                    <MaterialCommunityIcons color={colors.secondary} name="star" size={16}/>
                    <MaterialCommunityIcons color={colors.secondary} name="star" size={16}/>
                    <MaterialCommunityIcons color={colors.secondary} name="star" size={16}/>
                    <MaterialCommunityIcons color={colors.secondary} name="star" size={16}/>
                </>
            }
        </View>
    )
}