// import { Tabs } from "expo-router";
// import { Ionicons } from "@expo/vector-icons";

// export default function Layout() {
//   return (
//     <Tabs
//       screenOptions={({ route }) => ({
//         headerShown: false,

//         tabBarStyle: {
//           backgroundColor: "#111827",
//           borderTopWidth: 0,
//           height: 65,
//           paddingBottom: 8,
//         },

//         tabBarActiveTintColor: "#facc15",
//         tabBarInactiveTintColor: "#6b7280",

//         tabBarLabelStyle: {
//           fontSize: 12,
//         },

//         tabBarIcon: ({ color, size }) => {
//           let iconName;

//           if (route.name === "index") {
//             iconName = "home";
//           } else if (route.name === "search") {
//             iconName = "search";
//           }

//           return (
//             <Ionicons name={iconName} size={22} color={color} />
//           );
//         },
//       })}
//     >
//       <Tabs.Screen
//         name="index"
//         options={{ title: "Home" }}
//       />
//       <Tabs.Screen
//         name="search"
//         options={{ title: "Search" }}
//       />
//     </Tabs>
//   );
// }

import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }} />
  );
}
