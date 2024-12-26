import React, { useEffect } from "react";
import { Drawer } from "expo-router/drawer";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { router, usePathname } from "expo-router";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const CustomDrawerContent = (props) => {
  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  const menuItems = [
    {
      label: "Home",
      icon: "home-outline",
      route: "/(drawer)/(tabs)/HeroScreen",
    },
    {
      label: "Events",
      icon: "calendar-outline",
      route: "/(drawer)/EventScreen",
    },
    { label: "Calendar", icon: "calendar", route: "/(drawer)/CalendarScreen" },
    {
      label: "Your Ticket",
      icon: "ticket-outline",
      route: "/(drawer)/TicketScreen",
    },
    { label: "Your Cart", icon: "cart-outline", route: "/(drawer)/CartScreen" },
    {
      label: "Notifications",
      icon: "notifications-outline",
      route: "/NotificationScreen",
    },
    {
      label: "Sponsors",
      icon: "ribbon-outline",
      route: "/(drawer)/SponsorScreen",
    },
    { label: "Team", icon: "people-outline", route: "/(drawer)/TeamScreen" },
  ];

  return (
    <DrawerContentScrollView
      {...props}
      drawerStyle={styles.drawer}
      contentContainerStyle={styles.drawerContent}
    >
      <TouchableOpacity
        style={styles.closeIcon}
        onPress={() => props.navigation.closeDrawer()}
      >
        <Ionicons name="close-outline" size={42} color="#000" />
      </TouchableOpacity>
      <View style={styles.drawerItemsContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.drawerItem}
            onPress={() => {
              router.push(item.route);
            }}
          >
            <Ionicons
              name={item.icon}
              size={22}
              color="#000"
              style={styles.icon}
            />
            <Text style={styles.drawerItemText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.footer}>
        <Image
          source={require("../../assets/images/abhivriddhi-logo.png")}
          style={styles.footerImage}
        />
        <Text style={styles.footerText}>Developed By</Text>
        <Text style={styles.footerSubText}>Team IGNITIA 2K25</Text>
      </View>
    </DrawerContentScrollView>
  );
};

export default function Layout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ headerShown: false }}
      drawerStyle={styles.drawer}
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

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: "#000000",
    width: 250,
  },
  drawerContent: {
    paddingTop: 10,
    paddingHorizontal: 15,
    flex: 1,
    backgroundColor: "#CC9913",
    borderBottomEndRadius: 16,
    borderTopEndRadius: 16,
  },
  closeIcon: {
    padding: 10,
    alignItems: "flex-end",
    marginBottom: 10,
  },
  drawerItemsContainer: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 40,
    backgroundColor: "rgba(4, 0, 15, 0.25)",
  },
  drawerItemText: {
    textAlign: "center",
    fontFamily: "Poppins",
    color: "#fff",
    fontSize: 14,
    marginLeft: 15,
  },
  icon: {
    width: 24,
    textAlign: "center",
  },
  footer: {
    alignItems: "center",
    marginBottom: 20,
  },
  footerImage: {
    width: 240,
    height: 64,
    borderRadius: 50,
    marginBottom: 20,
  },
  footerText: {
    color: "#000",
    fontSize: 16,
  },
  footerSubText: {
    color: "#000",
    fontSize: 14,
    fontWeight: "bold",
  },
});
