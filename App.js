import ClientNavigator from "./app/navigation/ClientNavigator";
import LoginNavigator from "./app/navigation/LoginNavigator";
import NavigationContainer from "./app/navigation/NavigationContainer";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  return (
      <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
  );
}