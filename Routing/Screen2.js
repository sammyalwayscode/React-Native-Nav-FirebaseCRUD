import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Screen2 = ({ navigation }) => {
  return (
    <View>
      <Text>This is Screen 2</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.pop();
        }}
      >
        <Text>Go to Home Page</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({});
