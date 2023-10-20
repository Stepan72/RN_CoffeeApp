import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftCircleIcon } from "react-native-heroicons/outline";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../types";
import { HeartIcon } from "react-native-heroicons/solid";

type ProductScreenProps = NativeStackScreenProps<StackParamList, "Product">;

export default function ProductScreen({
  route,
  navigation,
}: ProductScreenProps) {
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
        {/* other */}
        <View></View>
      </SafeAreaView>
    </View>
  );
}
