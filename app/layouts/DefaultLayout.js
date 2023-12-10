import React from "react";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import EmployeListScreen from "../screens/EmployeListScreen";
import EmployeDetailsScreen from "../screens/EmployeDetailsScreen";
import { Screen } from "../components";

export default function DefaultLayout(){
    return (
        <EmployeDetailsScreen/>
    );
}