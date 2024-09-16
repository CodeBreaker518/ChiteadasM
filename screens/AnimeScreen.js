import React from "react";
import { View, Text, ScrollView, Image, Dimensions, Platform, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowDownTrayIcon, ArrowLeftIcon, BookmarkSquareIcon, ChevronRightIcon, MagnifyingGlassIcon, PaperAirplaneIcon, StarIcon } from "react-native-heroicons/outline";
import { PlayCircleIcon } from "react-native-heroicons/solid";
import EpisodesList from "../components/EpisodesList";

const ios = Platform.OS === "ios";
const { width, height } = Dimensions.get("window");

const AnimeScreen = () => {
  const { params: item } = useRoute();
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView className="flex-1 bg-background" showsVerticalScrollIndicator={false}>
      {/* Banner Image with overlay content */}
      <View style={{ height: height * 0.4 }}>
        <Image source={{ uri: item.image }} style={{ width: width, height: "100%", objectFit: "cover" }} />
        {/* Overlay and navbar content... */}
        {/* Top section with navbar and text */}
        <View className="w-full absolute p-4">
          {/* Navbar */}
          <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
            <View className="flex-row justify-between items-center">
              <View className="flex-row items-center justify-center gap-2">
                <ArrowLeftIcon size={30} strokeWidth={2} color="white" onPress={handleGoBack} />
              </View>
            </View>
          </SafeAreaView>
        </View>
      </View>

      {/* Content */}
      <View className="p-4">
        {/* Title and icons */}
        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-white text-3xl font-bold flex-shrink" numberOfLines={1}>
            {item.title}
          </Text>
          <View className="flex-row items-center ml-2 gap-4">
            <TouchableOpacity>
              <BookmarkSquareIcon size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
              <PaperAirplaneIcon size={24} color="white" style={styles.rotatedIcon} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Rating, year, and tags */}
        <View className="flex-row items-center justify-start flex-wrap mb-4">
          <TouchableOpacity className="flex-row items-center mr-2">
            <StarIcon size={16} color="#FFD700" />
            <Text className="text-secondary text-sm font-light ml-1 mr-1">{item.rating}</Text>
            <ChevronRightIcon size={16} color="#FFD700" />
          </TouchableOpacity>
          <Text className="text-white text-sm font-light mr-4">{item.year}</Text>
          <Text className="text-primary text-xs font-light mr-2 border border-secondary rounded-md py-1 px-2">+13</Text>
          <Text className="text-primary text-xs font-light mr-2 border border-secondary rounded-md py-1 px-2">Japón</Text>
          <Text className="text-primary text-xs font-light border border-secondary rounded-md py-1 px-2">HD</Text>
        </View>

        {/* Play and Download buttons */}
        <View className="flex-row justify-between items-center mb-4">
          <TouchableOpacity className="flex-1 bg-secondary flex-row justify-center items-center space-x-2 py-2 rounded-full mr-2">
            <PlayCircleIcon size={24} color="white" />
            <Text className="text-white text-sm font-semibold">Play</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 bg-transparent border border-secondary flex-row justify-center items-center space-x-2 py-2 rounded-full ml-2">
            <ArrowDownTrayIcon size={20} color="#ccc900" />
            <Text className="text-secondary text-sm font-semibold">Descargar</Text>
          </TouchableOpacity>
        </View>

        {/* Genre and synopsis */}
        <View className="mb-4">
          <Text className="text-white text-sm font-light mb-2">Genero: {item.genre}</Text>
          <Text className="text-white text-sm font-light" numberOfLines={3}>
            {item.synopsis}
          </Text>
        </View>

        {/* Episodes list */}
        <EpisodesList seasons={item.seasons} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rotatedIcon: {
    transform: [{ rotate: "-45deg" }],
  },
});

export default AnimeScreen;
