import { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { getPopularMovies } from "../services/api";
import MovieCard from "../components/MovieCard";

export default function HomeScreen({ navigation }) {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    const data = await getPopularMovies();
    setMovies(data);
  };

  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <MovieCard
          movie={item}
          onPress={() =>
            navigation.navigate("Detail", { id: item.id })
          }
        />
      )}
    />
  );
}
