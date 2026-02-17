import { useEffect, useState } from "react";
import { View, FlatList, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { getPopularMovies } from "../../services/api";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const router = useRouter();

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    const data = await getPopularMovies();
    setMovies(data);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0f0f1a" }}>
      <FlatList
        data={movies}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        columnWrapperStyle={{
          justifyContent: "space-between",
          paddingHorizontal: 12,
        }}
        contentContainerStyle={{ paddingVertical: 10 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              width: "48%",
              marginBottom: 15,
            }}
            onPress={() => router.push(`/movie/${item.id}`)}
          >
            <Image
              source={{
                uri:
                  "https://image.tmdb.org/t/p/w500" +
                  item.poster_path,
              }}
              style={{
                width: "100%",
                height: 230,
                borderRadius: 12,
              }}
            />

            <Text
              numberOfLines={1}
              style={{
                color: "white",
                marginTop: 6,
                fontWeight: "600",
              }}
            >
              {item.title}
            </Text>

            <View style={{ flexDirection: "row", marginTop: 2 }}>
              <Text style={{ color: "#facc15" }}>
                ⭐ {item.vote_average.toFixed(1)}
              </Text>

              <Text
                style={{
                  color: "#aaa",
                  marginLeft: 8,
                }}
              >
                {item.release_date?.split("-")[0]}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
