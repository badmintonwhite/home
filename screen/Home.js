import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useFonts,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Bottom_Tab from "../components/Bottom_Tab";
import Restaurant from "./Restaurant";

const Home = () => {
  const navigation = useNavigation();

  const handleImagePress = () => {
    navigation.navigate("Restaurant");
  };

  return (
    <View style={styles.frame}>
      <LinearGradient
        style={styles.box}
        colors={["rgba(179.4, 246.5, 242.47, 0.8)", "rgba(232, 232, 232, 0)"]}
        start={[0, 0]}
        end={[0, 1]}
      >
        <View style={styles.title_combine}>
          <Text style={styles.title}>DineConnect</Text>
          <Text style={styles.subtitle}>讓我們一起尋找共進晚餐的夥伴！</Text>
        </View>
        <Image
          style={styles.picture}
          source={require("../assets/food_picture.png")}
        />
      </LinearGradient>
      <View style={styles.quick_match}>
        <Text style={styles.match_text}>快速配對!</Text>
      </View>
      <View style={styles.RestaurantContainer}>
        <TouchableOpacity
          onPress={handleImagePress}
          style={styles.RestaurantImage}
        >
          <Image
            source={require("../assets/Restaurant_Example.jpg")}
            style={styles.Image}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleImagePress}
          style={styles.RestaurantImage}
        >
          <Image
            source={require("../assets/Restaurant_Example.jpg")}
            style={styles.Image}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleImagePress}
          style={styles.RestaurantImage}
        >
          <Image
            source={require("../assets/Restaurant_Example.jpg")}
            style={styles.Image}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleImagePress}
          style={styles.RestaurantImage}
        >
          <Image
            source={require("../assets/Restaurant_Example.jpg")}
            style={styles.Image}
          />
        </TouchableOpacity>
      </View>
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
  box: {
    position: "absolute",
    width: 410,
    height: 230,
    top: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  title_combine: {
    position: "absolute",
    right: 150,
    alignItems: "flex-start",
    flexDirection: "column",
    gap: 10,
    justifyContent: "center",
    width: 200,
  },
  title: {
    color: "#393030",
    fontWeight: "500",
    fontSize: 24,
    lineHeight: 36,
    marginTop: -1,
  },
  subtitle: {
    color: "#7b7777",
    fontSize: 12,
    fontWeight: "400",
    height: 21,
    letterSpacing: -0.41,
    lineHeight: 22,
    width: 253,
  },
  picture: {
    position: "absolute",
    right: 50,
    height: 66,
    width: 68,
  },
  quick_match: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    // right: 120,
    top: 190,
    width: 146,
    height: 38,
    alignSelf: "center",
    backgroundColor: "#BEF2F5",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
  },
  match_text: {
    fontSize: 20,
    textAlign: "center",
    right: -30,
    bottom: -1,
    lineHeight: 21,
  },
  RestaurantContainer: {
    position: "absolute",
    top: 160,
  },
  RestaurantImage: {
    width: 300,
    height: 100,
    margin: 8,
    bottom: -100,
  },
  Image: {
    width: "100%",
    height: "100%",
  },
  // Image: {
  //   width: 300,
  //   height: 100,
  //   margin: 8,
  //   bottom: -100,
  // },
});

export default Home;
