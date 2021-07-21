import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import { dummyData } from "./dummyData";
import { Swipeable } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";

export default function App() {
  const LeftSwipe = () => {
    return (
      <View style={styles.swipeContent}>
        <MaterialIcons name="cloud-done" size={36} color="white" />
      </View>
    );
  };
  const RightSwipe = () => {
    return (
      <View style={[styles.swipeContent, { backgroundColor: "red" }]}>
        <MaterialIcons name="delete-forever" size={36} color="white" />
      </View>
    );
  };
  const renderItem = ({ item }) => {
    return (
      <Swipeable
        renderLeftActions={LeftSwipe}
        renderRightActions={RightSwipe}
        leftThreshold={200}
        rightThreshold={200}
        onSwipeableLeftOpen={() => {
          Alert.alert("Fake Save", `Left Swiped item number ${item.key}`);
        }}
        onSwipeableRightOpen={() => {
          Alert.alert("Fake Delete", `Right Swiped item number ${item.key}`);
        }}
      >
        <View style={styles.item}>
          <Text style={styles.title}>{item.data}</Text>
        </View>
      </Swipeable>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Swipe Gesture Demo</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
        data={dummyData}
        renderItem={renderItem}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 28,
    padding: 10,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    color: "black",
    marginHorizontal: 10,
  },
  item: {
    backgroundColor: "#90CAF9",
    height: 80,
    justifyContent: "center",
    borderBottomWidth: 2,
    borderBottomColor: "white",
  },
  swipeContent: {
    paddingHorizontal: 10,
    width: 70,
    backgroundColor: "limegreen",
    borderBottomWidth: 2,
    borderBottomColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
