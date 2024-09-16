import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

const EpisodesList = ({ seasons }) => {
  const [selectedSeason, setSelectedSeason] = useState(1);
  const navigation = useNavigation();

  const currentSeason = seasons?.find((season) => season.number === selectedSeason);

  const handleNextSeason = () => {
    if (selectedSeason < seasons.length) {
      setSelectedSeason(selectedSeason + 1);
    }
  };

  const handlePreviousSeason = () => {
    if (selectedSeason > 1) {
      setSelectedSeason(selectedSeason - 1);
    }
  };

  const renderItem = ({ item: episode }) => (
    <TouchableOpacity onPress={() => navigation.navigate("EpisodePlayer", { episode })}>
      <View className="mr-4 flex-col items-center">
        <Image source={{ uri: episode.image }} style={{ width: 240, height: 160, borderRadius: 8 }} contentFit="cover" transition={1000} />
        <Text className="text-white text-sm mt-2 text-center">{episode.title.length > 14 ? episode.title.slice(0, 14) + "..." : episode.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="mb-8 space-y-4">
      <View className="flex-row justify-between items-center">
        <Text className="text-white text-xl">Episodios</Text>
        <View className="flex-row items-center">
          <TouchableOpacity onPress={handlePreviousSeason} disabled={selectedSeason === 1}>
            <Text className="text-primary mr-2">{"<"}</Text>
          </TouchableOpacity>
          <Text className="text-primary">Temporada {selectedSeason}</Text>
          <TouchableOpacity onPress={handleNextSeason} disabled={selectedSeason === seasons.length}>
            <Text className="text-primary ml-2">{">"}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={currentSeason.episodes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        initialNumToRender={4}
        maxToRenderPerBatch={4}
        windowSize={5}
      />
    </View>
  );
};

export default EpisodesList;
