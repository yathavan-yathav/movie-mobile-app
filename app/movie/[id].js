import { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { getMovieDetails } from "../../services/api";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MovieDetail() {

  const { id } = useLocalSearchParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    loadMovie();
  }, [id]);

  const loadMovie = async () => {
    const data = await getMovieDetails(id);
    setMovie(data);
  };

  if (!movie) return null;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0f0f1a" }}>
    <ScrollView style={{ padding: 20 }}>

      <Image
        source={{
          uri:
            "https://image.tmdb.org/t/p/w500" +
            movie.poster_path,
        }}
        style={{
          width: "100%",
          height: 400,
          borderRadius: 12
        }}
      />

      <Text style={{ fontSize: 24, fontWeight: "bold", color:"white",  marginTop: 15 }}>
        {movie.title}
      </Text>

      <Text style={{ 
        color:"#facc15",
        marginTop: 6 }}>⭐Rating: {movie.vote_average.toFixed(1)} {" "}
        
      </Text>

      

      <Text style={{ 
        color:"#facc15",
        marginTop: 6 }}>
        📅 Released: {movie.release_date?.split("-")[0]}
      </Text>

       <Text
        style={{
          color: "#d1d5db",
          marginTop: 15,
          lineHeight: 22,
        }}
      >
        {movie.overview}
      </Text>

    </ScrollView>
    </SafeAreaView>
  );
}
