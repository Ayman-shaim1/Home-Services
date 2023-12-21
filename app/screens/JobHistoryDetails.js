import { Text } from "react-native";
import { GoBackButton, Screen } from "../components";


export default function JobHistoryDetails({navigation}){
    return (
        <Screen widthPadding safeArea>
            <GoBackButton navigation={navigation}/>
            <Text>JobHistoryDetails</Text>
        </Screen>
    )
}