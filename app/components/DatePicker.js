import React, {useState} from 'react';
import RNDateTimePicker from '@react-native-community/datetimepicker';


export default function DatePicker({ placeholder, label, style, value }) {
 
    const [chosenDate, setChosenDate] = useState(new Date());

    return (
        <RNDateTimePicker value={new Date()} />
  );
}
