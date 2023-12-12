import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createNativeStackNavigator();

const stackOptions = { 
    headerShown: false,
    contentStyle:{
        backgroundColor:'#ffff',
    }
}

export default function LoginNavigator(){
    return ( 
        <Stack.Navigator
             options={stackOptions}>
                <Stack.Screen 
                    name="Welcome"
                    component={WelcomeScreen} 
                    options={stackOptions}
                />
                <Stack.Screen 
                    name="login" 
                    component={LoginScreen} 
                    options={stackOptions}
                />
                <Stack.Screen 
                   options={stackOptions}
                    name="Register" 
                    component={RegisterScreen} 
                />
        </Stack.Navigator>
      );
}