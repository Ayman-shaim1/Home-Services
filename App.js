import FindEmployeNavigator from "./app/navigation/FindEmployeNavigator";
import LoginNavigator from "./app/navigation/LoginNavigator";
import NavigationContainer from "./app/navigation/NavigationContainer";

export default function App() {
  return (
      <NavigationContainer>
        <FindEmployeNavigator/>
      </NavigationContainer>
  );
}