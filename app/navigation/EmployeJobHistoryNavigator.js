import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EmployeJobHistoryListScreen from "../screens/EmployeJobHistoryListScreen";
import EmployeJobHistoryDetailsScreen from "../screens/EmployeJobHistoryDetailsScreen";

const Stack = createNativeStackNavigator();

const stackOptions = {
  headerShown: false,
  contentStyle: {
    backgroundColor: "#ffff",
  },
};

export default function EmployeJobHistoryNavigator() {
  return (
    <Stack.Navigator options={stackOptions}>
      <Stack.Screen
        options={stackOptions}
        name="list"
        component={EmployeJobHistoryListScreen}
      />
      <Stack.Screen
        options={stackOptions}
        name="details"
        component={EmployeJobHistoryDetailsScreen}
      />
    </Stack.Navigator>
  );
}
