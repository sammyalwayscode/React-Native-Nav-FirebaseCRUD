import React from "react";
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";

const Screen1 = ({ navigation }) => {
  return (
    <View>
      <Text>This is Screen 1</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Next Page");
        }}
      >
        <Text>Go to Next Page</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({});
