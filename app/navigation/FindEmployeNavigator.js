
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen";
import EmployeListScreen from '../screens/EmployeListScreen';
import EmployeDetailsScreen from '../screens/EmployeDetailsScreen';

const Stack = createNativeStackNavigator();


const stackOptions = { 
    headerShown: false,
    contentStyle:{
        backgroundColor:'#ffff',
    }
}

export default function FindEmployeNavigator(){
    return ( 
        <Stack.Navigator
             options={stackOptions}>
                <Stack.Screen 
                    options={stackOptions}
                    name="Home"
                    component={HomeScreen} 
                />
                <Stack.Screen 
                    options={stackOptions}
                    name="EmployeList" 
                    component={EmployeListScreen} 
                />
                <Stack.Screen 
                    options={stackOptions}
                    name="EmployeDetails" 
                    component={EmployeDetailsScreen} 
                />
        </Stack.Navigator>
      );
}