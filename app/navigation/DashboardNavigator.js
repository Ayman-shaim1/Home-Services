import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "../screens/DashboardScreen";
import EmployeJobHistoryListScreen from "../screens/EmployeJobHistoryListScreen";
import EmployeJobHistoryDetailsScreen from "../screens/EmployeJobHistoryDetailsScreen";

const Stack = createNativeStackNavigator();

const stackOptions = {
  headerShown: false,
  contentStyle: {
    backgroundColor: "#ffff",
  },
};

export default function DashboardNavigator() {
  return (
    <Stack.Navigator options={stackOptions}>
      <Stack.Screen
        options={stackOptions}
        name="index"
        component={DashboardScreen}
      />

      <Stack.Screen
        options={stackOptions}
        name="details"
        component={EmployeJobHistoryDetailsScreen}
      />
    </Stack.Navigator>
  );
}
