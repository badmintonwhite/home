import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Bottom_Tab from "../components/Bottom_Tab";

const Account = () => {
  return (
    <View style={styles.frame}>
      <Text style={styles.text}>这是帳户頁面！</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frame: {
    position: "relative",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    position: "absolute",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Account;
