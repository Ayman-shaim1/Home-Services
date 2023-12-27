import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import DashboardScreen from "../screens/DashboardScreen";
import EmployeJobHistoryListScreen from "../screens/EmployeJobHistoryListScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import ProfileNavigator from "./ProfileNavigator";

const Tab = createBottomTabNavigator();

export default function EmployeAppNavigator() {
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
        name="dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name={`${focused ? "view-dashboard" : "view-dashboard-outline"}`}
              color={color}
              size={34}
            />
          ),
        }}
      />
      <Tab.Screen
        name="jobHistory"
        component={EmployeJobHistoryListScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name={`${focused ? "view-list" : "view-list-outline"}`}
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
        component={ProfileNavigator}
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
