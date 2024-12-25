import React, { useEffect } from "react";
import { Drawer } from "expo-router/drawer";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { router, usePathname } from "expo-router";

const CustomDrawerContent = (props) => {
  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label={"Home"}
        onPress={() => {
          router.push("/(drawer)/(tabs)/HeroScreen");
        }}
      />
      <DrawerItem
        label={"Search"}
        onPress={() => {
          router.push("/(drawer)/(tabs)/HeroScreen");
        }}
      />
      <DrawerItem
        label={"Explore"}
        onPress={() => {
          router.push("/(drawer)/(tabs)/HeroScreen");
        }}
      />
      <DrawerItem
        label={"Profile"}
        onPress={() => {
          router.push("/(drawer)/(tabs)/HeroScreen");
        }}
      />
      <DrawerItem
        label={"Feed"}
        onPress={() => {
          router.push("/(drawer)/(tabs)/feed");
        }}
      />
    </DrawerContentScrollView>
  );
};

export default function Layout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="(tabs)" options={{ headerShown: true }} />
      <Drawer.Screen name="HomeScreen" options={{ headerShown: true }} />
      <Drawer.Screen name="EventScreen" options={{ headerShown: true }} />
      <Drawer.Screen name="CalendarScreen" options={{ headerShown: true }} />
      <Drawer.Screen name="CartScreen" options={{ headerShown: true }} />
      <Drawer.Screen name="TicketScreen" options={{ headerShown: true }} />
      <Drawer.Screen name="SponsorScreen" options={{ headerShown: true }} />
      <Drawer.Screen name="TeamScreen" options={{ headerShown: true }} />
    </Drawer>
  );
}
