import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ClientJobHistoryListScreen from "../screens/ClientJobHistoryListScreen";
import ClientJobHistoryDetailsScreen from "../screens/ClientJobHistoryDetailsScreen";

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
        component={ClientJobHistoryListScreen}
      />
      <Stack.Screen
        options={stackOptions}
        name="details"
        component={ClientJobHistoryDetailsScreen}
      />
    </Stack.Navigator>
  );
}
