import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Screen1 from "../Routing/Screen1";
import Screen2 from "../Routing/Screen2";

const Stack = createStackNavigator();

const HomePath = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: "papayawhip",
          alignSelf: "center",
          // justifyContent: "center",
        },
      }}
    >
      <Stack.Screen name="Home Page" component={Screen1} />
      <Stack.Screen name="Next Page" component={Screen2} />
    </Stack.Navigator>
  );
};

export default HomePath;
