import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/ProfileScreen";
import ClientUpdateProfileScreen from "../screens/ClientUpdateProfileScreen";
import UpdatePasswordScreen from "../screens/UpdatePasswordScreen";

const Stack = createNativeStackNavigator();

const stackOptions = {
  headerShown: false,
  contentStyle: {
    backgroundColor: "#ffff",
  },
};

export default function ClientProfileNavigator() {
  return (
    <Stack.Navigator options={stackOptions}>
      <Stack.Screen
        options={stackOptions}
        name="frProfile"
        component={ProfileScreen}
      />
      <Stack.Screen
        options={stackOptions}
        name="updateProfile"
        component={ClientUpdateProfileScreen}
      />
      <Stack.Screen
        options={stackOptions}
        name="updatePassword"
        component={UpdatePasswordScreen}
      />
    </Stack.Navigator>
  );
}
