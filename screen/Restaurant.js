import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Bottom_Tab from "../components/Bottom_Tab";

const Restaurant = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>i wanna die boyyy!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Restaurant;
