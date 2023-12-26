import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/ProfileScreen";
import UpdateProfileScreen from "../screens/UpdateProfileScreen";
import UpdatePasswordScreen from "../screens/UpdatePasswordScreen";

const Stack = createNativeStackNavigator();

const stackOptions = {
  headerShown: false,
  contentStyle: {
    backgroundColor: "#ffff",
  },
};

export default function ProfileNavigator() {
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
        component={UpdateProfileScreen}
      />
      <Stack.Screen
        options={stackOptions}
        name="updatePassword"
        component={UpdatePasswordScreen}
      />
    </Stack.Navigator>
  );
}
