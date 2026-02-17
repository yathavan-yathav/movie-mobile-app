import { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { getMovieDetails } from "../services/api";

export default function DetailScreen({ route }) {

  const { id } = route.params;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    loadMovie();
  }, []);

  const loadMovie = async () => {
    const data = await getMovieDetails(id);
    setMovie(data);
  };

  if (!movie) return null;

  return (
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
          borderRadius: 10
        }}
      />

      <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 10 }}>
        {movie.title}
      </Text>

      <Text style={{ marginTop: 10 }}>
        {movie.overview}
      </Text>

      <Text style={{ marginTop: 10 }}>
        ⭐ Rating: {movie.vote_average}
      </Text>

      <Text>
        📅 Release Date: {movie.release_date}
      </Text>

    </ScrollView>
  );
}
