import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/ProfileScreen";
import EmployeUpdateProfileScreen from "../screens/EmployeUpdateProfileScreen";
import UpdatePasswordScreen from "../screens/UpdatePasswordScreen";

const Stack = createNativeStackNavigator();

const stackOptions = {
  headerShown: false,
  contentStyle: {
    backgroundColor: "#ffff",
  },
};

export default function EmployeProfileNavigator() {
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
        component={EmployeUpdateProfileScreen}
      />
      <Stack.Screen
        options={stackOptions}
        name="updatePassword"
        component={UpdatePasswordScreen}
      />
    </Stack.Navigator>
  );
}
