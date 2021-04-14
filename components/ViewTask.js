import React, { useState, useEffect } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
// import { Item } from "react-native-paper/lib/typescript/components/Drawer/Drawer";

import { app } from "../base";
import ViewProps from "./ViewProps";

const useTask = app.firestore().collection("task");
const ViewTask = () => {
  const [allTask, setAllTask] = useState([]);

  const viewPost = async () => {
    await useTask.onSnapshot((snapshot) => {
      const item = [];
      snapshot.forEach((doc) => {
        item.push({ ...doc.data(), id: doc.id });
      });
      setAllTask(item);
    });
  };

  useEffect(() => {
    viewPost();
  }, []);
  return (
    <ScrollView>
      <View>
        <FlatList
          data={allTask}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ViewProps item={item} />}
        />
      </View>
    </ScrollView>
  );
};

export default ViewTask;

const styles = StyleSheet.create({});
