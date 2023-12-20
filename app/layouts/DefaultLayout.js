import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { View } from "react-native";
import NavigationContainer from "../navigation/NavigationContainer";
import AppNavigator from "../navigation/AppNavigator";
import ClientNavigator from "../navigation/ClientNavigator";
import LoginNavigator from "../navigation/LoginNavigator";
import { Toast } from "../components";

SplashScreen.preventAutoHideAsync();

export default function DefaultLayout() {

    const [fontsLoaded] = useFonts({
      "Lato-Black": require("../assets/fonts/Lato/Lato-Black.ttf"),
      "Lato-Regular": require("../assets/fonts/Lato/Lato-Regular.ttf"),
      "Lato-Light": require("../assets/fonts/Lato/Lato-Light.ttf")
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
            <AppNavigator />
          </NavigationContainer>
          <Toast/>
      </View>
    );
    
}