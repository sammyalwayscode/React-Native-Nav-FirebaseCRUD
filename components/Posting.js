import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { app } from "../base";

const useTask = app.firestore().collection("task");

const Posting = () => {
  const [task, setTask] = useState("");

  const AddTask = async () => {
    await useTask.doc().set({
      task,
      time: new Date().toString(),
      completed: false,
    });
    setTask("");
  };
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TextInput
        placeholder="Enter a Task to do"
        style={{
          marginRight: 20,
          marginTop: 20,
          backgroundColor: "lightblue",
          width: 300,
          height: 40,
          borderRadius: 2,
          paddingLeft: 10,
        }}
        value={task}
        onChangeText={setTask}
      />
      <TouchableOpacity
        onPress={() => {
          AddTask();
          console.log("Tapped");
        }}
        style={{
          marginRight: 20,
          marginTop: 20,
          backgroundColor: "tomato",
          width: 60,
          height: 40,
          borderRadius: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Posting;

const styles = StyleSheet.create({});
