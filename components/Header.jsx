import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.hamBtnContainer}
        onPress={() => navigation.openDrawer()}
      >
        <Image
          source={require("../assets/images/hammenu.png")}
          style={styles.hamBtn}
        />
      </TouchableOpacity>

      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/ignitia.png")}
          style={styles.logo}
        />
      </View>

      <View style={styles.iconsContainer}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.navigate("/NotificationScreen")}
        >
          <Ionicons name="notifications-outline" size={22} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.navigate("/(drawer)/CartScreen")}
        >
          <Ionicons name="cart-outline" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingBottom: 10,
    backgroundColor: "transparent",
  },
  hamBtnContainer: {
    flex: 1,
    justifyContent: "center",
  },
  hamBtn: {
    width: 74,
    height: 74,
    resizeMode: "contain",
  },
  logoContainer: {
    flex: 2,
    alignItems: "center",
  },
  logo: {
    width: 110,
    height: 50,
    resizeMode: "contain",
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  iconContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    marginLeft: 10,
    borderRadius: 50,
  },
});

export default Header;
