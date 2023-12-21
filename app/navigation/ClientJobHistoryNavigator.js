import { createNativeStackNavigator } from "@react-navigation/native-stack";
import JobHistoryScreen from "../screens/JobHistoryScreen";
import JobHistoryDetails from "../screens/JobHistoryDetails";

const Stack = createNativeStackNavigator();

const stackOptions = {
  headerShown: false,
  contentStyle: {
    backgroundColor: "#ffff",
  },
};

export default function ClientJobHistoryNavigator() {
  return (
    <Stack.Navigator options={stackOptions}>
      <Stack.Screen
        options={stackOptions}
        name="list"
        component={JobHistoryScreen}
      />
      <Stack.Screen
        options={stackOptions}
        name="details"
        component={JobHistoryDetails}
      />
    </Stack.Navigator>
  );
}
