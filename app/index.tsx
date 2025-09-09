import { router } from "expo-router";
import React from "react";
import { Button, StyleSheet, View } from "react-native";

export default function index() {
  return (
    <View style={styles.container}>
      <Button title="Go to Login Screen" onPress={() => router.push("/Screens/LoginScreen")} />
      <Button title="Go to API List" onPress={() => router.push("/Screens/PostListScreen")} />
      <Button title="Go to Counter" onPress={() => router.push("/Screens/CounterScreen")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 20,
    padding: 20,
  },
});
