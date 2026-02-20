import { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { getPopularMovies } from "../services/api";
import MovieCard from "../components/MovieCard";

export default function HomeScreen({ navigation }) {

  const appStart = Date.now();   // Start when component initializes

  const [movies, setMovies] = useState([]);

  // 1️⃣ Measure First Screen Render (FCP equivalent)
  useEffect(() => {
    requestAnimationFrame(() => {
      const renderTime = Date.now() - appStart;
      console.log("First Screen Render Time:", renderTime, "ms");
    });
  }, []);


useEffect(() => {
  const load = async () => {
    const start = performance.now();

    const data = await getPopularMovies();

    const end = performance.now();

    console.log("API Fetch Time:", end - start, "ms");

    setMovies(data);
  };

  load();
}, []);


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
