import React from "react";
import { Screen } from "../components";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import RegisterScreen from "../screens/RegisterScreen";

export default function DefaultLayout(){
    return (
        <Screen>
            {/* <LoginScreen/> */}
            {/* <HomeScreen/> */}
            <RegisterScreen/>
        </Screen>
    )
}