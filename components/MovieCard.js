import { View, Text, Image, TouchableOpacity } from "react-native";

export default function MovieCard({ movie, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ flexDirection: "row", padding: 10 }}>

        <Image
          source={{
            uri:
              "https://image.tmdb.org/t/p/w500" +
              movie.poster_path,
          }}
          style={{
            width: 80,
            height: 120,
            borderRadius: 8
          }}
        />

        <View style={{ marginLeft: 10, flex: 1 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            {movie.title}
          </Text>

          <Text numberOfLines={3}>
            {movie.overview}
          </Text>
        </View>

      </View>
    </TouchableOpacity>
  );
}
