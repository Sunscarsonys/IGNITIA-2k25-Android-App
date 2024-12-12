import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="HeroScreen" options={{ title: "Home" }} />
      <Tabs.Screen name="SearchScreen" options={{ title: "Location" }} />
      <Tabs.Screen name="ExploreScreen" options={{ title: "Location" }} />
      <Tabs.Screen name="ProfileScreen" options={{ title: "Profile" }} />
    </Tabs>
  );
}
