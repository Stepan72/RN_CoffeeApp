import { View, Text, Image } from "react-native";
import React from "react";
import { CofeeItemProps } from "../types";
import { themeColors } from "../theme";
import { StarIcon } from "react-native-heroicons/solid";

export default function CoffeeCard({
  id,
  name,
  price,
  volume,
  stars,
  image,
  desc,
}: CofeeItemProps) {
  return (
    <View
      style={{
        borderRadius: 40,
        backgroundColor: themeColors.bgDark,
        height: 350,
        width: 250,
      }}
    >
      <View
        style={{
          shadowColor: "black",
          shadowRadius: 30,
          shadowOffset: { width: 0, height: 40 },
          shadowOpacity: 0.6,
        }}
        className="flex-row justify-center -mt-14"
      >
        <Image source={image} className="h-40 w-40" />
      </View>
      <View className="px-5 mt-5 space-y-3">
        <Text className="text-white text-3xl font-semibold z-10">{name}</Text>
        <View
          style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
          className="flex-row items-center rounded-3xl p-1 px-2 space-x-1 w-16"
        >
          <StarIcon size={15} color="white" />
          <Text className="text-base font-semibold text-white">{stars}</Text>
        </View>
        <View className="flex-row space-x-1 mb-6 z-10">
          <Text className="text-base text-white font-semibold opacity-60">
            Volume
          </Text>
          <Text className="text-base text-white font-semibold ">{volume}</Text>
        </View>
        <View>
          <Text className="text-white font-bold text-lg">${price}</Text>
          <Text>16.43</Text>
        </View>
      </View>
    </View>
  );
}
