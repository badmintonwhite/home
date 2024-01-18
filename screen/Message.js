import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Bottom_Tab from "../components/Bottom_Tab";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

const Message = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frame}>
      <ScrollView style={styles.messageList}>
        <TouchableOpacity
          style={styles.messageBox}
          onPress={() => navigation.navigate("chat")}
        >
          <Image
            source={require("../assets/JayChou.jpg")}
            style={styles.avatar}
          />
          <View style={styles.userInfo}>
            <View style={styles.topInfo}>
              <Text style={styles.username}>onandon</Text>
              <Text style={styles.onlineTime}>5 mins</Text>
            </View>
            <Text style={styles.lastMsg}>hallo i am uncle roger</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.messageBox}
          onPress={() => navigation.navigate("chat")}
        >
          <Image
            source={require("../assets/JayChou.jpg")}
            style={styles.avatar}
          />
          <View style={styles.userInfo}>
            <View style={styles.topInfo}>
              <Text style={styles.username}>onandon</Text>
              <Text style={styles.onlineTime}>5 mins</Text>
            </View>
            <Text style={styles.lastMsg}>hallo i am uncle roger</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.messageBox}
          onPress={() => navigation.navigate("chat")}
        >
          <Image
            source={require("../assets/Yujin.jpg")}
            style={styles.avatar}
          />
          <View style={styles.userInfo}>
            <View style={styles.topInfo}>
              <Text style={styles.username}>onandon</Text>
              <Text style={styles.onlineTime}>5 mins</Text>
            </View>
            <Text style={styles.lastMsg}>hallo i am uncle roger</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  frame: {
    position: "relative",
    top: 40,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  text: {
    position: "absolute",
    fontSize: 20,
    fontWeight: "bold",
  },
  messageList: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  messageBox: {
    width: "100%",
    flexDirection: "row",
    gap: 16,
    borderBottom: "1px solid gray",
    marginBottom: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 50,
  },
  userInfo: {},
  topInfo: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  username: {
    fontSize: 20,
  },
  onlineTime: {},
  lastMsg: {},
});

export default Message;
