import React from "react";
import { Screen } from "../components";
import { HomeScreen,LoginScreen } from "../screens";

export default function DefaultLayout(){
    return (
        <Screen>
            <LoginScreen/>
            {/* <HomeScreen/> */}
        </Screen>
    )
}