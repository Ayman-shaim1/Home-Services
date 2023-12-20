import { View } from "react-native";
import JobHistoryItem from "./JobHistoryItem";
import DatePicker from "./DatePicker";


export default function JobHistoryContainer(){
    return(
        <View>
             <DatePicker icon="calendar"/>
            <JobHistoryItem/>
            <JobHistoryItem/>
            <JobHistoryItem/>
        </View>
    )
}

