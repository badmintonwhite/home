import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screen/Home";
import Favorite from "./screen/Favorite";
import Message from "./screen/Message";
import Account from "./screen/Account";
import Restaurant from "./screen/Restaurant";
import Bottom_Tab from "./components/Bottom_Tab";
import Chat from "./screen/chat";

const Stack = createStackNavigator();

const HomeScreen = () => {
  return (
    <>
      <Home />
      <Bottom_Tab />
    </>
  );
};

const RestaurantScreen = () => {
  return (
    <>
      <Restaurant />
      <Bottom_Tab />
    </>
  );
};

const FavoriteScreen = () => {
  return (
    <>
      <Favorite />
      <Bottom_Tab />
    </>
  );
};

const MessageScreen = () => {
  return (
    <>
      <Message />
      <Bottom_Tab />
    </>
  );
};

const AccountScreen = () => {
  return (
    <>
      <Account />
      <Bottom_Tab />
    </>
  );
};
const ChatScreen = () => {
  return (
    <>
      <Chat />
    </>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Favorite" component={FavoriteScreen} />
        <Stack.Screen name="Message" component={MessageScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
