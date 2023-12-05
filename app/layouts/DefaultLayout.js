import React from "react";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { Screen } from "../components";

export default function DefaultLayout(){
    return (
     <Screen>
           <HomeScreen/>
     </Screen>
    )
}