import React from "react";
import { Tabs } from "expo-router";
import SecondType from "@/components/SecondType";

function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { display: "none" },
      }}
    >
      <Tabs.Screen
        name="HeroScreen"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="SearchScreen"
        options={{
          title: "Search",
        }}
      />
      <Tabs.Screen
        name="ExploreScreen"
        options={{
          title: "Explore",
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        options={{
          title: "Profile",
        }}
      />
    </Tabs>
  );
}

export default function RootLayout() {
  return (
    <>
      <TabLayout />
      <SecondType />
    </>
  );
}
