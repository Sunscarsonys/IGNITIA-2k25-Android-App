import React from "react";
import { Text, View, StyleSheet, Image, Animated, Easing } from "react-native";
import Header from "@/components/Header";

export default function HeroScreen() {
  const translateY = new Animated.Value(0);
  const rotate = new Animated.Value(0);

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateY, {
          toValue: 10,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: -10,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    Animated.loop(
      Animated.timing(rotate, {
        toValue: 1,
        duration: 8000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.heading}>Welcome to Ignitia</Text>

      <Animated.View
        style={[styles.heroImageContainer, { transform: [{ translateY }] }]}
      >
        <Image
          source={require("../../../assets/images/hero.png")}
          style={styles.heroImage}
        />
      </Animated.View>

      <Animated.Image
        source={require("../../../assets/images/ring-4.png")}
        style={[
          styles.circularRing,
          styles.bottomLeft,
          {
            transform: [
              { rotate: rotate.interpolate({ inputRange: [0, 1], outputRange: ["0deg", "360deg"] }) },
            ],
          },
        ]}
      />

      <Animated.Image
        source={require("../../../assets/images/ring-4.png")}
        style={[
          styles.circularRing,
          styles.bottomRight,
          {
            transform: [
              { rotate: rotate.interpolate({ inputRange: [0, 1], outputRange: ["0deg", "360deg"] }) },
            ],
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#0E0019",
    justifyContent: "flex-start",
    position: "relative",
    overflow: "hidden",
  },
  heading: {
    fontSize: 32,
    color: "white",
    fontWeight: "bold",
    marginTop: 50,
    fontFamily: "Floral",
  },
  heroImageContainer: {
    marginTop: 50,
    width: "80%",
    height: 300,
    overflow: "hidden",
  },
  heroImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  circularRing: {
    width: 220,
    height: 220,
    position: "absolute",
    opacity: 0.7,
  },
  bottomLeft: {
    bottom: -80,
    left: -80,
  },
  bottomRight: {
    top: -80,
    right: -80,
  },
});
