import React, { useRef } from "react";
import { View, Text, TouchableWithoutFeedback, Dimensions, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Carousel from "react-native-snap-carousel-rnna";

let { width, height } = Dimensions.get("window");

const TrendingAnimes = ({ data }) => {
  const carouselRef = useRef(null);

  const navigation = useNavigation();

  const handlePress = (item) => {
    navigation.navigate("Anime", item);
  };

  return (
    <View className="mb-8">
      <View className="flex-row justify-between items-center mb-5 px-4">
        <Text className="text-white text-xl font-bold">Trending Anime</Text>
        <TouchableOpacity>
          <Text className="text-primary">See All</Text>
        </TouchableOpacity>
      </View>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={({ item }) => <AnimeCard item={item} handlePress={handlePress} />}
        firstItem={1}
        inactiveSlideOpacity={0.5}
        sliderWidth={width}
        itemWidth={width * 0.62}
        contentContainerCustomStyle={{ paddingHorizontal: 16 }}
        slideStyle={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        activeSlideAlignment="center"
      />
    </View>
  );
};

const AnimeCard = ({ item, handlePress }) => {
  return (
    <TouchableWithoutFeedback onPress={() => handlePress(item)}>
      <View className="relative">
        <View className="absolute p-4">
          <Text className=" w-full text-start px-2 rounded-sm bg-secondary text-white z-50 text-sm font-bold">{item.rating}</Text>
        </View>
        <Image source={{ uri: item.image }} style={{ width: width * 0.6, height: height * 0.4 }} className={`rounded-3xl`} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TrendingAnimes;
