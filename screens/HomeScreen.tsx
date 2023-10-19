import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { MapPinIcon } from "react-native-heroicons/solid";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { categories, coffeeItems } from "../constants";
import { themeColors } from "../theme";
import Carousel from "react-native-snap-carousel";
import CoffeeCard from "../components/CoffeeCard";

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState<number>(1);

  return (
    <View className="flex-1 relative bg-white">
      <Image
        source={require("../assets/images/beansBackground1.png")}
        className="w-full absolute -top-5 opacity-10"
        style={{ height: 220 }}
      />
      <SafeAreaView className="flex-1">
        {/* header */}
        <View className="flex-row justify-between items-center px-4 ">
          <Image
            source={require("../assets/images/avatar.png")}
            className="w-9 h-9 rounded-full"
          />
          <View className="flex-row items-center space-x-2">
            <MapPinIcon size={25} color={themeColors.bgLight} />
            <Text className="text-base font-semibold">New York</Text>
          </View>
          <BellIcon size={27} color="black" />
        </View>
        {/* search bar */}
        <View className="mx-5 mt-14">
          <View className="flex-row justify-center items-center rounded-full p-1 bg-[#e6e6e6]">
            <TextInput
              placeholder="Search"
              className="p-4 flex-1 font-semibold text-gray-700"
            />
            <TouchableOpacity
              className="rounded-full p-2"
              style={{ backgroundColor: themeColors.bgLight }}
            >
              <MagnifyingGlassIcon size={25} color="white" strokeWidth={2} />
            </TouchableOpacity>
          </View>
        </View>
        {/* categories 5:43 */}
        <View className="px-5 mt-6">
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={(item) => item.id.toString()}
            className="overflow-visible"
            renderItem={({ item: { title, id } }) => {
              const isActive = id === activeCategory;
              const activeCategoryStyle = isActive
                ? "text-white"
                : "text-gray-700";

              return (
                <TouchableOpacity
                  onPress={() => setActiveCategory(id)}
                  style={{
                    backgroundColor: isActive
                      ? themeColors.bgLight
                      : "rgba(0,0,0,0.07)",
                  }}
                  className="p-4 px-5 rounded-full mr-2 shadow-sm"
                >
                  <Text className={`font-semibold ${activeCategoryStyle}`}>
                    {title}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        {/* coffee cards */}
        <View className="mt-16 py-2">
          <Carousel
            containerCustomStyle={{ overflow: "visible" }}
            data={coffeeItems}
            renderItem={({ item }) => {
              return <CoffeeCard {...item} />;
            }}
            firstItem={1}
            inactiveSlideOpacity={0.75}
            inactiveSlideScale={0.75}
            sliderWidth={400}
            itemWidth={260}
            slideStyle={{ display: "flex", alignItems: "center" }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}
