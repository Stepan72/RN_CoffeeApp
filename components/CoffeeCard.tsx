import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { CofeeItemProps, StackParamList } from "../types";
import { themeColors } from "../theme";
import { PlusIcon, StarIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<StackParamList, "Product">;
type ProductNavigationProp = Props["navigation"];

export default function CoffeeCard({
  id,
  name,
  price,
  volume,
  stars,
  image,
  desc,
}: CofeeItemProps) {
  const navigation = useNavigation<ProductNavigationProp>();

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
        <Image source={image} className="h-40 w-40 z-20" />
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
        <View
          style={{
            backgroundColor: themeColors.bgDark,
            shadowColor: themeColors.bgDark,
            shadowOffset: { width: 0, height: 40 },
            shadowRadius: 25,
            shadowOpacity: 0.8,
          }}
          className="flex-row justify-between items-center"
        >
          <Text className="text-white font-bold text-lg">${price}</Text>
          <TouchableOpacity
            className="p-4 bg-white rounded-full"
            style={{
              shadowColor: "black",
              shadowOffset: { width: -20, height: -10 },
              shadowRadius: 40,
              shadowOpacity: 1,
            }}
            onPress={() => {
              navigation.navigate("Product", {
                id,
                name,
                price,
                volume,
                stars,
                image,
                desc,
              });
            }}
          >
            <PlusIcon size={25} strokeWidth={2} color={themeColors.bgDark} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
