import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { TouchableOpacity } from "react-native";
import ChiteadasLogo from "../components/ChiteadasLogo";

const ios = Platform.OS === "ios";

const Home = () => {
  return (
    <View className="flex-1 bg-background">
      <SafeAreaView className={`${ios ? "-mb-2" : "mb-3"}`}>
        <StatusBar style="light" />
        {/* Menu, SearchBar and Logo */}
        <View className="flex-row justify-between items-center mx-4">
          <TouchableOpacity className=" p-2 rounded-lg">
            <Bars3CenterLeftIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>

          <View className="flex-row items-center">
            <ChiteadasLogo width={40} height={40} />
            <Text className="text-2xl font-bold text-primary ml-2">Chiteadas</Text>
          </View>

          <TouchableOpacity className=" p-2 rounded-lg">
            <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;
