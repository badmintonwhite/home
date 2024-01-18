import {
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  Text,
  View,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";

const Bottom_Tab = () => {
  const [iconColor, setIconColor] = useState({
    home: "#7b7777",
    favorite: "#7b7777",
    message: "#7b7777",
    account: "#7b7777",
  });
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    setIconColor({
      home: route.name === "Home" ? "#000000" : "#7b7777",
      favorite: route.name === "Favorite" ? "#000000" : "#7b7777",
      message: route.name === "Message" ? "#000000" : "#7b7777",
      account: route.name === "Account" ? "#000000" : "#7b7777",
    });
  }, [route]);

  const handlePress = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.Bottom_Tab}>
      <TouchableWithoutFeedback onPress={() => handlePress("Home")}>
        <View style={styles.iconTextContainer}>
          <Image
            style={[styles.icon, { tintColor: iconColor.home }]}
            source={require("../assets/Home.png")}
          />
          <Text style={styles.text}>首頁</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => handlePress("Favorite")}>
        <View style={styles.iconTextContainer}>
          <Image
            style={[styles.icon, { tintColor: iconColor.favorite }]}
            source={require("../assets/Favorite.png")}
          />
          <Text style={styles.text}>收藏</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => handlePress("Message")}>
        <View style={styles.iconTextContainer}>
          <Image
            style={[styles.icon, { tintColor: iconColor.message }]}
            source={require("../assets/Message.png")}
          />
          <Text style={styles.text}>訊息</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => handlePress("Account")}>
        <View style={styles.iconTextContainer}>
          <Image
            style={[styles.icon, { tintColor: iconColor.account }]}
            source={require("../assets/Account.png")}
          />
          <Text style={styles.text}>帳戶</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  Bottom_Tab: {
    position: "fixed",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 85,
    right: -185,
    bottom: 10,
    width: 24,
    height: 24,
  },
  iconTextContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  text: {
    fontSize: 12,
    textAlign: "center",
  },
});

export default Bottom_Tab;
