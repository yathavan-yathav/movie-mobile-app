// import { useState } from "react";
// import { View, TextInput, FlatList, Text, Image, TouchableOpacity } from "react-native";
// import { useRouter } from "expo-router";
// import { searchMovies } from "../../services/api";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { Ionicons } from "@expo/vector-icons";

// export default function Search() {

//   const [query, setQuery] = useState("");
//   const [movies, setMovies] = useState([]);
//   const router = useRouter();

//   const handleSearch = async (text) => {
//     setQuery(text);

//     if (text.length > 2) {
//       const results = await searchMovies(text);
//       setMovies(results);
//     } else {
//       setMovies([]);
//     }
//   };

//   return (
//      <SafeAreaView style={{ flex: 1, backgroundColor: "#0f0f1a" }}>
//     <View 
//      style={{
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#1f2937",
//     margin: 15,
//     borderRadius: 10,
//     paddingHorizontal: 10,
//   }}>

//       <TextInput
//         placeholder="Search movies..."
//         placeholderTextColor="#6b7280"
//         value={query}
//         onChangeText={setQuery}
//         style={{
//            flex: 1,
//       color: "white",
//       paddingVertical: 12,
//         }}
//       />

//       <FlatList
//         data={movies}
//         numColumns={2}
//         keyExtractor={(item) => item.id.toString()}
//         columnWrapperStyle={{
//           justifyContent: "space-between",
//           paddingHorizontal: 12,
//         }}
//         contentContainerStyle={{ paddingBottom: 20 }}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//           style={{
//               width: "48%",
//               marginBottom: 15,
//             }}
//             onPress={() => router.push(`/movie/${item.id}`)}
//           >
//             <Image
//               source={{
//                 uri:
//                   "https://image.tmdb.org/t/p/w500" +
//                   item.poster_path,
//               }}
//               style={{
//                 width: "100%",
//                 height: 230,
//                 borderRadius: 12,
//               }}
//             />

//             <Text
//               numberOfLines={1}
//               style={{
//                 color: "white",
//                 marginTop: 6,
//                 fontWeight: "600",
//               }}
//             >
//               {item.title}
//             </Text>

//             <View style={{ flexDirection: "row", marginTop: 2 }}>
//               <Text style={{ color: "#facc15" }}>
//                 ⭐ {item.vote_average?.toFixed(1)}
//               </Text>

//               <Text
//                 style={{
//                   color: "#9ca3af",
//                   marginLeft: 8,
//                 }}
//               >
//                 {item.release_date?.split("-")[0]}
//               </Text>
//             </View>
//           </TouchableOpacity>
//         )}
//       />

//     </View>
//     </SafeAreaView>
//   );
// }

import { useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { searchMovies } from "../../services/api";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function Search() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const router = useRouter();

  const handleSearch = async () => {
    if (query.length > 0) {
      const results = await searchMovies(query);
      setMovies(results);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0f0f1a" }}>
      
      {/* 🔍 Search Bar */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#1f2937",
          margin: 15,
          borderRadius: 10,
          paddingHorizontal: 10,
        }}
      >
        <TextInput
          placeholder="Search movies..."
          placeholderTextColor="#6b7280"
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={handleSearch}
          returnKeyType="search"
          style={{
            flex: 1,
            color: "white",
            paddingVertical: 12,
          }}
        />

        <TouchableOpacity onPress={handleSearch}>
          <Ionicons name="search" size={22} color="#facc15" />
        </TouchableOpacity>
      </View>

      {/* 🎬 Movie Grid */}
      <FlatList
        data={movies}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        columnWrapperStyle={{
          justifyContent: "space-between",
          paddingHorizontal: 12,
        }}
        contentContainerStyle={{ paddingBottom: 20 }}
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
                ⭐ {item.vote_average?.toFixed(1)}
              </Text>

              <Text
                style={{
                  color: "#9ca3af",
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
