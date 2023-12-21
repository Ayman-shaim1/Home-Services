import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ClientNavigator from './ClientNavigator';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import colors from '../config/colors';
import ProfileScreen from '../screens/ProfileScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import { Platform, View } from 'react-native';
import JobHistoryScreen from '../screens/JobHistoryScreen';
import ClientJobHistoryNavigator from './ClientJobHistoryNavigator';
const Tab = createBottomTabNavigator();


export default function AppNavigator() {

  return (
    <Tab.Navigator
        screenOptions={{
            tabBarShowLabel:false,
            headerShown:false,
            tabBarActiveTintColor:colors.primary,
            tabBarInactiveTintColor:colors.gray,
            tabBarStyle:{
                backgroundColor:colors.white,
                paddingTop:Platform.OS === "android" ? -5:5,
                height:Platform.OS === "android" ? 63 : 80
            },
        }}
        sceneContainerStyle={{
            backgroundColor:colors.white,
        }}
        >
        <Tab.Screen 
            name="Accueil" 
            component={ClientNavigator}
                options={{
                    tabBarIcon: ({ color, size,focused }) => (
                            <MaterialCommunityIcons name={`${focused? "home":"home-outline"}`} color={color} size={34} />
                    ),   
                }}
            />
             <Tab.Screen 
                name="JobHistory" 
                component={ClientJobHistoryNavigator}
                    options={{
                        tabBarIcon: ({ color, size,focused }) => (
                            <MaterialCommunityIcons name={`${focused? "account-network":"account-network-outline"}`} color={color} size={34} />
                        ),
                    }}
                />
        
        <Tab.Screen 
            name="Notifications" 
            component={NotificationsScreen}
                options={{
                    tabBarBadge:2,
                    tabBarIcon: ({ color, size,focused }) => (
                        <MaterialCommunityIcons name={`${focused? "bell":"bell-outline"}`} color={color} size={34} />
                    ),
                }}
            />

        <Tab.Screen 
            name="Profile" 
            component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color, size,focused }) => (
                        <MaterialCommunityIcons name={`${focused? "account":"account-outline"}`} color={color} size={34} />
                    ),
                    
                }}
            />

    </Tab.Navigator>
  );
}


