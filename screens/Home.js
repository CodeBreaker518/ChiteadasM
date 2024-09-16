import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, Platform, ScrollView, Dimensions, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { PlayCircleIcon, PlusIcon } from "react-native-heroicons/solid";

import ChiteadasLogo from "../components/ChiteadasLogo";
import TrendingAnimes from "../components/TrendingAnimes";
import AnimeList from "../components/AnimeList";

const ios = Platform.OS === "ios";
const { width, height } = Dimensions.get("window");

const anime = [
  {
    id: 1,
    title: "Naruto",
    rating: 9.4,
    image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/oOkvQ1anSMvdYbUGGf7NAnfwHUt.jpg",
    synopsis:
      "Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.",
    year: 2002,
    genre: "Action, Adventure, Fantasy",
    seasons: [
      {
        number: 1,
        episodes: [
          {
            id: 1,
            title: "Episodio 1",
            duration: "24m",
            image: "https://via.placeholder.com/300x169?text=Naruto+S1E1",
          },
          {
            id: 2,
            title: "Episodio 2",
            duration: "24m",
            image: "https://via.placeholder.com/300x169?text=Naruto+S1E2",
          },
          {
            id: 3,
            title: "Episodio 3",
            duration: "24m",
            image: "https://via.placeholder.com/300x169?text=Naruto+S1E3",
          },
        ],
      },
      {
        number: 2,
        episodes: [
          {
            id: 1,
            title: "Episodio 1",
            duration: "24m",
            image: "https://via.placeholder.com/300x169?text=Naruto+S2E1",
          },
          {
            id: 2,
            title: "Episodio 2",
            duration: "24m",
            image: "https://via.placeholder.com/300x169?text=Naruto+S2E2",
          },
          {
            id: 3,
            title: "Episodio 3",
            duration: "24m",
            image: "https://via.placeholder.com/300x169?text=Naruto+S2E3",
          },
        ],
      },
      {
        number: 3,
        episodes: [
          {
            id: 1,
            title: "Episodio 1",
            duration: "24m",
            image: "https://via.placeholder.com/300x169?text=Naruto+S3E1",
          },
          {
            id: 2,
            title: "Episodio 2",
            duration: "24m",
            image: "https://via.placeholder.com/300x169?text=Naruto+S3E2",
          },
          {
            id: 3,
            title: "Episodio 3",
            duration: "24m",
            image: "https://via.placeholder.com/300x169?text=Naruto+S3E3",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Attack on Titan",
    rating: 9.6,
    image: "https://image.tmdb.org/t/p/original/xtDs2WuiOyKYEn2bGax9TxX4GDo.jpg",
    synopsis:
      "Attack on Titan is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity lives within cities surrounded by enormous walls that protect them from gigantic",
    year: 2013,
    genre: "Action, Adventure, Drama",
    seasons: [
      {
        number: 1,
        episodes: [
          {
            id: 1,
            title: "Episodio 1",
            duration: "24m",
            image: "https://via.placeholder.com/300x169?text=AoT+S1E1",
          },
          {
            id: 2,
            title: "Episodio 2",
            duration: "24m",
            image: "https://via.placeholder.com/300x169?text=AoT+S1E2",
          },
          {
            id: 3,
            title: "Episodio 3",
            duration: "24m",
            image: "https://via.placeholder.com/300x169?text=AoT+S1E3",
          },
        ],
      },
      {
        number: 2,
        episodes: [
          {
            id: 1,
            title: "Episodio 1",
            duration: "24m",
            image: "https://via.placeholder.com/300x169?text=AoT+S2E1",
          },
          {
            id: 2,
            title: "Episodio 2",
            duration: "24m",
            image: "https://via.placeholder.com/300x169?text=AoT+S2E2",
          },
          {
            id: 3,
            title: "Episodio 3",
            duration: "24m",
            image: "https://via.placeholder.com/300x169?text=AoT+S2E3",
          },
        ],
      },
      {
        number: 3,
        episodes: [
          {
            id: 1,
            title: "Episodio 1",
            duration: "24m",
            image: "https://via.placeholder.com/300x169?text=AoT+S3E1",
          },
          {
            id: 2,
            title: "Episodio 2",
            duration: "24m",
            image: "https://via.placeholder.com/300x169?text=AoT+S3E2",
          },
          {
            id: 3,
            title: "Episodio 3",
            duration: "24m",
            image: "https://via.placeholder.com/300x169?text=AoT+S3E3",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "One Piece",
    rating: 9.5,
    image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/cMD9Ygz11zjJzAovURpO75Qg7rT.jpg",
    synopsis: "One Piece is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha's Weekly Shōnen Jump magazine since July 22, 1997.",
    year: 1999,
    genre: "Action, Adventure, Fantasy",
    seasons: [
      {
        number: 1,
        episodes: [
          {
            id: 1,
            title: "Episodio 1",
            duration: "24m",
            image: "https://via.placeholder.com/300x169?text=OnePiece+S1E1",
          },
          {
            id: 2,
            title: "Episodio 2",
            duration: "24m",
            image: "https://via.placeholder.com/300x169?text=OnePiece+S1E2",
          },
          {
            id: 3,
            title: "Episodio 3",
            duration: "24m",
            image: "https://via.placeholder.com/300x169?text=OnePiece+S1E3",
          },
        ],
      },
      {
        number: 2,
        episodes: [
          {
            id: 1,
            title: "Episodio 1",
            duration: "24m",
            image: "https://via.placeholder.com/300x169?text=OnePiece+S2E1",
          },
          {
            id: 2,
            title: "Episodio 2",
            duration: "24m",
            image: "https://via.placeholder.com/300x169?text=OnePiece+S2E2",
          },
          {
            id: 3,
            title: "Episodio 3",
            duration: "24m",
            image: "https://via.placeholder.com/300x169?text=OnePiece+S2E3",
          },
        ],
      },
      {
        number: 3,
        episodes: [
          {
            id: 1,
            title: "Episodio 1",
            duration: "24m",
            image: "https://via.placeholder.com/300x169?text=OnePiece+S3E1",
          },
          {
            id: 2,
            title: "Episodio 2",
            duration: "24m",
            image: "https://via.placeholder.com/300x169?text=OnePiece+S3E2",
          },
          {
            id: 3,
            title: "Episodio 3",
            duration: "24m",
            image: "https://via.placeholder.com/300x169?text=OnePiece+S3E3",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Death Note",
    rating: 9.3,
    image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/tCZFfYTIwrR7n94J6G14Y4hAFU6.jpg",
    synopsis:
      "Death Note is a Japanese manga series written by Tsugumi Ohba and illustrated by Takeshi Obata. The story follows Light Yagami, a teen genius who stumbles across a mysterious otherworldly notebook",
    year: 2006,
    genre: "Crime, Drama, Fantasy",
    seasons: [
      {
        number: 1,
        episodes: [
          {
            id: 1,
            title: "Episodio 1",
            duration: "24m",
            image: "https://via.placeholder.com/300x169?text=DeathNote+S1E1",
          },
          {
            id: 2,
            title: "Episodio 2",
            duration: "24m",
            image: "https://via.placeholder.com/300x169?text=DeathNote+S1E2",
          },
          {
            id: 3,
            title: "Episodio 3",
            duration: "24m",
            image: "https://via.placeholder.com/300x169?text=DeathNote+S1E3",
          },
        ],
      },
      {
        number: 2,
        episodes: [
          {
            id: 1,
            title: "Episodio 1",
            duration: "24m",
            image: "https://via.placeholder.com/300x169?text=DeathNote+S2E1",
          },
          {
            id: 2,
            title: "Episodio 2",
            duration: "24m",
            image: "https://via.placeholder.com/300x169?text=DeathNote+S2E2",
          },
          {
            id: 3,
            title: "Episodio 3",
            duration: "24m",
            image: "https://via.placeholder.com/300x169?text=DeathNote+S2E3",
          },
        ],
      },
      {
        number: 3,
        episodes: [
          {
            id: 1,
            title: "Episodio 1",
            duration: "24m",
            image: "https://via.placeholder.com/300x169?text=DeathNote+S3E1",
          },
          {
            id: 2,
            title: "Episodio 2",
            duration: "24m",
            image: "https://via.placeholder.com/300x169?text=DeathNote+S3E2",
          },
          {
            id: 3,
            title: "Episodio 3",
            duration: "24m",
            image: "https://via.placeholder.com/300x169?text=DeathNote+S3E3",
          },
        ],
      },
    ],
  },
];

const Home = () => {
  const [trendingAnimes, setTrendingAnimes] = useState(anime);
  const [upcomingAnimes, setUpcomingAnimes] = useState(anime);
  const [topRatedAnimes, setTopRatedAnimes] = useState(anime);

  return (
    <View className="flex-1 bg-background">
      <StatusBar style="light" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Banner Image with overlay content */}
        <View style={{ height: height * 0.4 }}>
          <Image source={{ uri: anime[1].image }} style={{ width: width, height: "100%", objectFit: "cover" }} />

          {/* Overlay for better text visibility */}
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          />

          {/* Content overlay */}
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              justifyContent: "space-between",
            }}
            className="p-4">
            {/* Top section with navbar and text */}
            <View>
              {/* Navbar */}
              <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
                <View className="flex-row justify-between items-center">
                  <View className="flex-row items-center justify-center gap-2">
                    <ChiteadasLogo width={40} height={40} />
                  </View>

                  <TouchableOpacity className="p-2 rounded-lg bg-transparent">
                    <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
                  </TouchableOpacity>
                </View>
              </SafeAreaView>
            </View>

            {/* Bottom section with buttons */}
            <View className="flex-col items-start justify-center space-y-0.5">
              <Text className="text-white text-3xl font-bold">{anime[1].title}</Text>
              <Text className="text-white text-sm font-light" numberOfLines={2}>
                {anime[1].synopsis}
              </Text>

              <View className="flex-row justify-center items-center gap-2">
                <TouchableOpacity className="bg-secondary flex-row justify-center items-center space-x-2 px-4 py-1 rounded-full">
                  <PlayCircleIcon size={24} color="white" />
                  <Text className="text-white text-sm font-semibold">Play</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-transparent border border-white flex-row justify-center items-center space-x-2 px-4 py-1 rounded-full">
                  <PlusIcon size={24} color="white" />
                  <Text className="text-white text-sm font-semibold">Mi Lista</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* Content */}
        <View className="mt-4">
          {/* trending Animes carousel */}
          <TrendingAnimes data={trendingAnimes} />

          {/* top rated Animes row */}
          <AnimeList title="Top Rated Animes" horizontal={true} data={topRatedAnimes} />

          {/* upcoming Animes row */}
          <AnimeList title="Upcoming Animes" horizontal={true} data={upcomingAnimes} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
