import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Macth from "../match/Macth";
import Contest from "../match/Contest";

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator>
        <Stack.Screen name="Macth" component={Macth} />
        <Stack.Screen name="Contest" component={Contest} />
    </Stack.Navigator>
);