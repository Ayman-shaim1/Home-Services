import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { View } from "react-native";
import NavigationContainer from "../navigation/NavigationContainer";
import EmployeAppNavigator from "../navigation/EmployeAppNavigator";
import ClientAppNavigator from "../navigation/ClientAppNavigator";
import LoginNavigator from "../navigation/LoginNavigator";

import { Toast } from "../components";

SplashScreen.preventAutoHideAsync();

export default function DefaultLayout() {
  const [fontsLoaded] = useFonts({
    LatoBlack: require("../assets/fonts/Lato/Lato-Black.ttf"),
    LatoRegular: require("../assets/fonts/Lato/Lato-Regular.ttf"),
    LatoLight: require("../assets/fonts/Lato/Lato-Light.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <NavigationContainer>
        {/* <ClientAppNavigator /> */}
        {/* <EmployeAppNavigator /> */}
        <LoginNavigator />
      </NavigationContainer>
      <Toast />
    </View>
  );
}
