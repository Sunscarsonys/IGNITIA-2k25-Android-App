import React, { useEffect, useRef } from "react";
import { View, Text, Image, StyleSheet, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function PreSplashScreen() {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fillAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();

    Animated.timing(fillAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();

    const timer = setTimeout(() => {
      navigation.navigate("SplashScreen");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation, fadeAnim, fillAnim]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/ignitia-logo.png")}
        style={styles.logo}
      />
      <Text style={styles.subText1}>Designed By</Text>
      <Text style={styles.subText2}>Team Ignitia</Text>
      <Animated.View style={[styles.loader, { opacity: fadeAnim }]}>
        <View style={styles.loaderBarContainer}>
          <Animated.View
            style={[
              styles.loaderBarFill,
              {
                width: fillAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0%", "100%"],
                }),
              },
            ]}
          />
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0E0019",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 300,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  text: {
    fontSize: 30,
    color: "#FFD700",
    fontFamily: "Poppins-Bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subText1: {
    fontSize: 14,
    color: "#FFFFFF",
    textAlign: "center",
    position: "absolute",
    bottom: 40,
    marginBottom: 5,
  },
  subText2: {
    fontSize: 14,
    color: "#FFFFFF",
    textAlign: "center",
    position: "absolute",
    bottom: 20,
    marginBottom: 5,
  },
  loader: {
    marginTop: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  loaderBarContainer: {
    width: 140,
    height: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D6A82E",
    overflow: "hidden",
  },
  loaderBarFill: {
    height: "100%",
    borderRadius: 10,
    backgroundColor: "#D6A82E",
  },
});
