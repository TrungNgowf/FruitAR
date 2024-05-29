import { Link, Tabs } from "expo-router";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { View, Image, Text } from "react-native";
import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function HomeScreen() {
  const colorScheme = useColorScheme();

  return (
    <View className="flex flex-col justify-between items-center h-[100%] bg-emerald-300">
      <View className="h-[30vh] w-[100%] mt-4">
        <Image
          className="w-[100%] h-[100%]"
          source={require("@/assets/images/home-logo.png")}
          resizeMode="contain"
        />
      </View>

      <View className="flex flex-col justify-start items-center w-[100%] bg-white h-[70vh] rounded-t-[30px] p-2 font-montserrat">
        <View>
          <Text className="text-2xl font-normal text-center mt-3">
            Chào mừng đến với
          </Text>
          <Text className="text-3xl font-semibold text-center text-emerald-600">
            FruitAR
          </Text>
        </View>
        <Text className="font-normal mt-12 text-lg">
          Chọn chức năng để tiếp tục
        </Text>
        <View className="flex flex-row justify-evenly items-center mt-4 w-[100%]">
          <Link href="/book_module">
            <View className="w-[30vw] h-[20vh] rounded-xl bg-emerald-500 flex flex-col justify-evenly items-center drop-shadow-lg hover:drop-shadow-none">
              <Image
                className="w-[70%] h-[30%]"
                source={require("@/assets/icons/book-module.png")}
                resizeMode="contain"
              />
              <Text className="text-xl font-medium text-white mt-3">
                Sách AR
              </Text>
            </View>
          </Link>
          <Link href="/classify_module">
            <View className="w-[30vw] h-[20vh] rounded-xl bg-emerald-500 flex flex-col justify-evenly items-center drop-shadow-lg hover:drop-shadow-none">
              <Image
                className="w-[70%] h-[30%]"
                source={require("@/assets/icons/classify-module.png")}
                resizeMode="contain"
              />
              <Text className="text-xl font-medium text-white mt-2 text-center">
                Phân loại
              </Text>
            </View>
          </Link>
        </View>
        <Text className="absolute bottom-1 text-gray-400">Version V1.01</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
