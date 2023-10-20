import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native";
import React from "react";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StackParamList, TabParamList } from "./types";
import HomeScreen from "./screens/HomeScreen";
import { View } from "react-native";

import {
  HomeIcon as HomeSolid,
  HeartIcon as HeartSolid,
  ShoppingBagIcon as BagSolid,
} from "react-native-heroicons/solid";
import {
  HomeIcon as HomeOutline,
  HeartIcon as HeartOutline,
  ShoppingBagIcon as BagOutline,
} from "react-native-heroicons/outline";
import { themeColors } from "./theme";
import ProductScreen from "./screens/ProductScreen";

const Tab = createBottomTabNavigator<TabParamList>();
const Stack = createNativeStackNavigator<StackParamList>();

LogBox.ignoreLogs([
  "ViewPropTypes will be removed from React Native, along with all other PropTypes. We recommend that you migrate away from PropTypes and switch to a type system like TypeScript.",
]);

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeTabs} />
          <Stack.Screen name="Product" component={ProductScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => menuIcons(route, focused),
        tabBarStyle: {
          marginBottom: 20,
          borderRadius: 50,
          backgroundColor: themeColors.bgLight,
          marginHorizontal: 20,
        },
        tabBarItemStyle: {
          marginTop: 30,
        },
      })}
    >
      <Tab.Screen name="First" component={HomeScreen} />
      <Tab.Screen name="Second" component={HomeScreen} />
      <Tab.Screen name="Third" component={HomeScreen} />
    </Tab.Navigator>
  );
};

const menuIcons = (
  route: RouteProp<TabParamList, keyof TabParamList>,
  focused: boolean
) => {
  let icon = <HomeSolid />;
  const buttonActiveStyle = focused ? "bg-white" : "";
  if (route.name === "First") {
    icon = focused ? (
      <HomeSolid size={30} color={themeColors.bgLight} />
    ) : (
      <HomeOutline size={30} color="white" strokeWidth={2} />
    );
  }
  if (route.name === "Second") {
    icon = focused ? (
      <HeartSolid size={30} color={themeColors.bgLight} />
    ) : (
      <HeartOutline size={30} color="white" strokeWidth={2} />
    );
  }
  if (route.name === "Third") {
    icon = focused ? (
      <BagSolid size={30} color={themeColors.bgLight} />
    ) : (
      <BagOutline size={30} color="white" strokeWidth={2} />
    );
  }
  return (
    <View
      className={`flex items-center rounded-full p-3 shadow ${buttonActiveStyle}`}
    >
      {icon}
    </View>
  );
};
// 22:34
