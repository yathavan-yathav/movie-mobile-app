import { useState } from "react";
import { View, TextInput, FlatList } from "react-native";
import { searchMovies } from "../services/api";
import MovieCard from "../components/MovieCard";

export default function SearchScreen({ navigation }) {

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async (text) => {
    setQuery(text);

    if (text.length > 2) {
      const results = await searchMovies(text);
      setMovies(results);
    } else {
      setMovies([]);
    }
  };

  return (
    <View style={{ flex: 1 }}>

      <TextInput
        placeholder="Search movies..."
        value={query}
        onChangeText={handleSearch}
        style={{
          borderWidth: 1,
          padding: 10,
          margin: 10,
          borderRadius: 8
        }}
      />

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

    </View>
  );
}
