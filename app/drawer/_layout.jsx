import React, { useEffect } from "react";
import { Drawer } from "expo-router/drawer";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { usePathname } from "expo-router";

const CustomDrawerContent = (props) => {
  const { navigation } = props;
  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label={"Home"}
        onPress={() => {
          navigation.navigate("tabs", { screen: "HeroScreen" });
        }}
      />
      <DrawerItem
        label={"Calendar"}
        onPress={() => {
          navigation.navigate("CalendarScreen");
        }}
      />
      <DrawerItem
        label={"Cart"}
        onPress={() => {
          navigation.navigate("CartScreen");
        }}
      />
      <DrawerItem
        label={"Events"}
        onPress={() => {
          navigation.navigate("EventScreen");
        }}
      />
      <DrawerItem
        label={"Sponsors"}
        onPress={() => {
          navigation.navigate("SponsorScreen");
        }}
      />
      <DrawerItem
        label={"Team"}
        onPress={() => {
          navigation.navigate("TeamScreen");
        }}
      />
      <DrawerItem
        label={"Tickets"}
        onPress={() => {
          navigation.navigate("TicketScreen");
        }}
      />
    </DrawerContentScrollView>
  );
};

export default function Layout() {
  return (
    <Drawer
      drawerContent={(props) => (
        <CustomDrawerContent {...props} navigation={props.navigation} />
      )}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="tabs" options={{ headerShown: true }} />
      <Drawer.Screen name="CalendarScreen" options={{ headerShown: true }} />
      <Drawer.Screen name="CartScreen" options={{ headerShown: true }} />
      <Drawer.Screen name="EventScreen" options={{ headerShown: true }} />
      <Drawer.Screen name="SponsorScreen" options={{ headerShown: true }} />
      <Drawer.Screen name="TeamScreen" options={{ headerShown: true }} />
      <Drawer.Screen name="TicketScreen" options={{ headerShown: true }} />
    </Drawer>
  );
}
