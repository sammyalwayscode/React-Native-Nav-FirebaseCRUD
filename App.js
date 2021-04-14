import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Posting from "./components/Posting";
import ViewProps from "./components/ViewProps";
import ViewTask from "./components/ViewTask";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import HomePath from "./NavigationPath/HomePath";

const Screen1 = ({ navigation }) => (
  <View
    style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Text>Screen 1</Text>
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Next Page");
      }}
    >
      <Text> Go to Screen 2</Text>
    </TouchableOpacity>
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <HomePath />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// <Text>Open up!</Text>

// <Posting />
// <ViewTask />
// <StatusBar style="auto" />

// const Screen2 = () => (
//   <View
//     style={{
//       flex: 1,
//       alignItems: "center",
//       justifyContent: "center",
//     }}
//   >
//     <Text>Screen 2</Text>
//   </View>
// );

// const Stack = createStackNavigator();

// const ChangeScreens = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: true,
//         headerStyle: {
//           backgroundColor: "papayawhip",
//           alignSelf: "center",
//           // justifyContent: "center",
//         },
//       }}
//     >
//       <Stack.Screen name="Home Page" component={Screen1} />
//       <Stack.Screen name="Next Page" component={Screen2} />
//     </Stack.Navigator>
//   );
// };
