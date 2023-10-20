import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftCircleIcon } from "react-native-heroicons/outline";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../types";
import {
  HeartIcon,
  MinusIcon,
  PlusIcon,
  ShoppingBagIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import { themeColors } from "../theme";

type ProductScreenProps = NativeStackScreenProps<StackParamList, "Product">;

export default function ProductScreen({
  route,
  navigation,
}: ProductScreenProps) {
  const { id, name, price, volume, stars, image, desc } = route.params;
  const [size, setSize] = useState("small");
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => {
    setQuantity((prevValue) => prevValue + 1);
  };
  const decreaseQty = () => {
    if (quantity === 1) return;
    setQuantity((prevValue) => prevValue - 1);
  };

  return (
    <View className="flex-1">
      <StatusBar style="light" />
      <Image
        source={require("../assets/images/beansBackground2.png")}
        style={{
          height: 300,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}
        className="w-full absolute "
      />
      <SafeAreaView className="space-y-4">
        {/* headerBar */}
        <View className="mx-4 flex-row justify-between items-center">
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <ArrowLeftCircleIcon size={50} strokeWidth={1.2} color="white" />
          </TouchableOpacity>
          <TouchableOpacity className="rounded-full border-2 border-white p-2">
            <HeartIcon size={24} color="white" />
          </TouchableOpacity>
        </View>
        {/* Product image */}
        <View
          className="flex-row justify-center"
          style={{
            shadowColor: themeColors.bgDark,
            shadowRadius: 30,
            shadowOffset: { width: 0, height: 30 },
            shadowOpacity: 0.9,
          }}
        >
          <Image source={image} className="w-60 h-60" />
        </View>
        {/* starRating */}
        <View
          style={{ backgroundColor: themeColors.bgLight }}
          className="flex-row items-center rounded-3xl p-1 mx-4 px-2 space-x-1 w-16 opacity-90"
        >
          <StarIcon size={15} color="white" />
          <Text className="text-base font-semibold text-white">{stars}</Text>
        </View>
        {/* nameText */}
        <View className="mx-4 flex-row justify-between items-center">
          <Text
            style={{ color: themeColors.text }}
            className="text-3xl font-semibold"
          >
            {name}
          </Text>
          <Text
            style={{ color: themeColors.text }}
            className="text-lg font-semibold"
          >
            ${price}
          </Text>
        </View>
        {/* Size */}
        <View className="mx-4 space-y-2">
          <Text
            className="text-lg font-bold"
            style={{ color: themeColors.text }}
          >
            Cofee Size
          </Text>
          <View className="flex-row justify-between">
            <TouchableOpacity
              onPress={() => setSize("small")}
              className=" p-3 px-8 rounded-full"
              style={{
                backgroundColor:
                  size === "small" ? themeColors.bgLight : "rgba(0,0,0,0.07)",
              }}
            >
              <Text
                className={size === "small" ? "text-white" : "text-gray-700"}
              >
                Small
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSize("medium")}
              className=" p-3 px-8 rounded-full"
              style={{
                backgroundColor:
                  size === "medium" ? themeColors.bgLight : "rgba(0,0,0,0.07)",
              }}
            >
              <Text
                className={size === "medium" ? "text-white" : "text-gray-700"}
              >
                Medium
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSize("large")}
              className=" p-3 px-8 rounded-full"
              style={{
                backgroundColor:
                  size === "large" ? themeColors.bgLight : "rgba(0,0,0,0.07)",
              }}
            >
              <Text
                className={size === "large" ? "text-white" : "text-gray-700"}
              >
                Large
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* About */}
        <View className="mx-4 space-y-2 h-28">
          <Text
            className="text-lg font-bold"
            style={{ color: themeColors.text }}
          >
            About
          </Text>
          <Text className="text-gray-600">{desc}</Text>
        </View>
        {/* quantity */}
        <View className="flex-row justify-between items-center mx-4 ">
          <View className="flex-row items-center space-x-1">
            <Text className="text-base font-semibold text-gray-700 opacity-60">
              Volume
            </Text>
            <Text className="text-base text-black font-semibold">{volume}</Text>
          </View>
          <View className="flex-row items-center space-x-4 border border-gray-500 rounded-full p-1 px-4">
            <TouchableOpacity onPress={() => decreaseQty()}>
              <MinusIcon size={20} strokeWidth={3} color={themeColors.text} />
            </TouchableOpacity>
            <Text
              className="font-extrabold text-lg"
              style={{ color: themeColors.text }}
            >
              {quantity}
            </Text>
            <TouchableOpacity onPress={() => increaseQty()}>
              <PlusIcon size={20} strokeWidth={3} color={themeColors.text} />
            </TouchableOpacity>
          </View>
        </View>
        {/* buy button */}
        <View className="flex-row justify-between items-center mx-4">
          <TouchableOpacity className="p-4 rounded-full border border-gray-400">
            <ShoppingBagIcon size={30} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ backgroundColor: themeColors.bgLight }}
            className="p-5 rounded-full flex-1 ml-3"
          >
            <Text className="text-center font-semibold text-lg text-white">
              Buy Now
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}
