import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import React from "react";

export default function chat() {
  const [text, onChangeText] = React.useState("Useless Text");

  return (
    <View style={styles.frame}>
      <View style={styles.userContainer}>
        <View style={styles.userBox}>
          <Image source={require("../assets/arrow.png")} style={styles.arrow} />
          <Image
            source={require("../assets/JayChou.jpg")}
            style={styles.avavar}
          />
          <View style={styles.userinfo}>
            <Text style={styles.username}>onandon</Text>
            <Text style={styles.onlineText}>online0.0</Text>
          </View>
        </View>

        <Image
          source={require("../assets/cellphone.jpg")}
          style={styles.phone}
        />
      </View>

      {/* <ScrollView></ScrollView> */}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.userInput}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    position: "relative",
    top: 40,
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 16,
  },
  userContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  username: {
    fontSize: 20,
  },
  userBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
  },
  arrow: {
    width: 30,
    height: 30,
  },
  avavar: {
    width: 48,
    height: 48,
    borderRadius: 50,
  },
  phone: {
    width: 48,
    height: 48,
  },

  inputContainer: {
    position: "absolute",
    bottom: 48,
    width: "100%",
    height: 48,
  },
  userInput: {
    height: "80%",
    width: "100%",
    paddingVertical: 10,
    paddingStart: 10,
    paddingEnd: 5,
    borderWidth: 1,
    borderRadius: 40,
  },
});
