import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ClientNavigator from "./ClientNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import NotificationsScreen from "../screens/NotificationsScreen";
import { Platform } from "react-native";
import ClientJobHistoryNavigator from "./ClientJobHistoryNavigator";
import ClientProfileNavigator from "./ClientProfileNavigator";

const Tab = createBottomTabNavigator();

export default function ClientAppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray,
        tabBarStyle: {
          backgroundColor: colors.white,
          paddingTop: Platform.OS === "android" ? 8 : 5,
          height: Platform.OS === "android" ? 63 : 80,
          paddingBottom: Platform.OS === "android" ? 10 : 24,
        },
      }}
      sceneContainerStyle={{
        backgroundColor: colors.white,
      }}
    >
      <Tab.Screen
        name="Accueil"
        component={ClientNavigator}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name={`${focused ? "home" : "home-outline"}`}
              color={color}
              size={34}
            />
          ),
        }}
      />
      <Tab.Screen
        name="JobHistory"
        component={ClientJobHistoryNavigator}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name={`${
                focused ? "account-network" : "account-network-outline"
              }`}
              color={color}
              size={34}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarBadge: 2,
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name={`${focused ? "bell" : "bell-outline"}`}
              color={color}
              size={34}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ClientProfileNavigator}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name={`${focused ? "account" : "account-outline"}`}
              color={color}
              size={34}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
