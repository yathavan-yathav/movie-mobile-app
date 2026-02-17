import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#111827",
          borderTopWidth: 0,
          height: 65,
          paddingBottom: 8,
        },
        tabBarActiveTintColor: "#facc15",
        tabBarInactiveTintColor: "#6b7280",
        tabBarIcon: ({ color }) => {
          let iconName =
            route.name === "index" ? "home" : "search";

          return (
            <Ionicons name={iconName} size={22} color={color} />
          );
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="search" options={{ title: "Search" }} />
    </Tabs>
  );
}
