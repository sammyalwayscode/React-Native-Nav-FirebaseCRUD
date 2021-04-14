import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { app } from "../base";

const useTask = app.firestore().collection("task");
const ViewProps = ({ item }) => {
  const [done, setDone] = useState(false);

  const chnageCompleted = async () => {
    await useTask.doc(item.id).update({
      completed: done,
    });
  };

  const deleteTask = async () => {
    await useTask.doc(item.id).delete();
  };

  return (
    <View
      style={{
        margin: 10,

        justifyContent: "space-between",
        flexDirection: "row",
        // justifyContent: "center",
        alignItems: "center",
      }}
    >
      {item.completed ? (
        <TouchableOpacity
          style={{
            backgroundColor: "green",
            width: 60,
            borderRadius: 3,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            setDone(!done);
            chnageCompleted(item.id);
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            Done
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{
            backgroundColor: "gold",
            width: 60,
            borderRadius: 3,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            setDone(!done);
            chnageCompleted(item.id);
            console.log(item.id);
            console.log(done);
          }}
        >
          <Text
            style={{
              color: "gray",
              fontWeight: "bold",
            }}
          >
            Undone
          </Text>
        </TouchableOpacity>
      )}
      <Text>{item.task}</Text>
      <TouchableOpacity
        style={{
          backgroundColor: "red",
          width: 60,
          borderRadius: 3,
          height: 40,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => {
          deleteTask(item.id);
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          Delete
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ViewProps;

const styles = StyleSheet.create({});
