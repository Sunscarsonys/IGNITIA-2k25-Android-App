import { Image, StyleSheet, View, ImageBackground } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import Animated, {
  Easing,
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const SecondType = () => {
  const router = useRouter();

  const firstValue = useSharedValue(25);
  const secondValue = useSharedValue(25);
  const thirdValue = useSharedValue(25);
  const fourthValue = useSharedValue(25);
  const firstWidth = useSharedValue(50);
  const secondWidth = useSharedValue(50);
  const thirdWidth = useSharedValue(50);
  const fourthWidth = useSharedValue(50);
  const isOpen = useSharedValue(false);
  const opacity = useSharedValue(0);
  const progress = useDerivedValue(() =>
    isOpen.value ? withTiming(1) : withTiming(0)
  );

  const handlePress = () => {
    const config = {
      easing: Easing.bezier(0.68, -0.6, 0.32, 1.6),
      duration: 500,
    };
    if (isOpen.value) {
      firstWidth.value = withTiming(50, { duration: 100 }, (finish) => {
        if (finish) {
          firstValue.value = withTiming(25, config);
        }
      });
      secondWidth.value = withTiming(50, { duration: 100 }, (finish) => {
        if (finish) {
          secondValue.value = withDelay(50, withTiming(30, config));
        }
      });
      thirdWidth.value = withTiming(50, { duration: 100 }, (finish) => {
        if (finish) {
          thirdValue.value = withDelay(100, withTiming(30, config));
        }
      });
      fourthWidth.value = withTiming(50, { duration: 100 }, (finish) => {
        if (finish) {
          fourthValue.value = withDelay(150, withTiming(30, config));
        }
      });
      opacity.value = withTiming(0, { duration: 100 });
    } else {
      firstValue.value = withDelay(200, withSpring(130));
      secondValue.value = withDelay(100, withSpring(210));
      thirdValue.value = withSpring(290);
      fourthValue.value = withSpring(370);
      firstWidth.value = withDelay(1200, withSpring(200));
      secondWidth.value = withDelay(1100, withSpring(200));
      thirdWidth.value = withDelay(1000, withSpring(200));
      fourthWidth.value = withDelay(900, withSpring(200));
      opacity.value = withDelay(1200, withSpring(1));
    }
    isOpen.value = !isOpen.value;
  };

  const opacityText = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const firstWidthStyle = useAnimatedStyle(() => {
    return {
      width: firstWidth.value,
    };
  });
  const secondWidthStyle = useAnimatedStyle(() => {
    return {
      width: secondWidth.value,
    };
  });
  const thirdWidthStyle = useAnimatedStyle(() => {
    return {
      width: thirdWidth.value,
    };
  });
  const fourthWidthStyle = useAnimatedStyle(() => {
    return {
      width: fourthWidth.value,
    };
  });

  const firstIcon = useAnimatedStyle(() => {
    const scale = interpolate(
      firstValue.value,
      [30, 130],
      [0, 1],
      Extrapolation.CLAMP
    );
    return {
      bottom: firstValue.value,
      transform: [{ scale: scale }],
    };
  });

  const secondIcon = useAnimatedStyle(() => {
    const scale = interpolate(
      secondValue.value,
      [30, 210],
      [0, 1],
      Extrapolation.CLAMP
    );
    return {
      bottom: secondValue.value,
      transform: [{ scale: scale }],
    };
  });

  const thirdIcon = useAnimatedStyle(() => {
    const scale = interpolate(
      thirdValue.value,
      [30, 290],
      [0, 1],
      Extrapolation.CLAMP
    );
    return {
      bottom: thirdValue.value,
      transform: [{ scale: scale }],
    };
  });

  const fourthIcon = useAnimatedStyle(() => {
    const scale = interpolate(
      fourthValue.value,
      [30, 370],
      [0, 1],
      Extrapolation.CLAMP
    );
    return {
      bottom: fourthValue.value,
      transform: [{ scale: scale }],
    };
  });

  const plusIcon = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${progress.value * 45}deg` }],
    };
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => router.push("/(drawer)/(tabs)/ProfileScreen")}
      >
        <Animated.View
          style={[styles.contentContainer, firstIcon, firstWidthStyle]}
        >
          <LinearGradient
            colors={["#D19A08", "#FEDB7E", "#D19A08"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradientBackground}
          >
            <View style={styles.iconContainer}>
              <Ionicons name="person-circle-outline" size={28} color="#000" />
            </View>
            <Animated.Text style={[styles.text, opacityText]}>
              Profile
            </Animated.Text>
          </LinearGradient>
        </Animated.View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/(drawer)/(tabs)/ExploreScreen")}
      >
        <Animated.View
          style={[styles.contentContainer, secondIcon, secondWidthStyle]}
        >
          <LinearGradient
            colors={["#D19A08", "#FEDB7E", "#D19A08"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradientBackground}
          >
            <View style={styles.iconContainer}>
              <Ionicons name="compass-outline" size={28} color="#000" />
            </View>
            <Animated.Text style={[styles.text, opacityText]}>
              Explore
            </Animated.Text>
          </LinearGradient>
        </Animated.View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/(drawer)/(tabs)/SearchScreen")}
      >
        <Animated.View
          style={[styles.contentContainer, thirdIcon, thirdWidthStyle]}
        >
          <LinearGradient
            colors={["#D19A08", "#FEDB7E", "#D19A08"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradientBackground}
          >
            <View style={styles.iconContainer}>
              <Ionicons name="search-outline" size={28} color="#000" />
            </View>
            <Animated.Text style={[styles.text, opacityText]}>
              Search
            </Animated.Text>
          </LinearGradient>
        </Animated.View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/(drawer)/(tabs)/HeroScreen")}
      >
        <Animated.View
          style={[styles.contentContainer, fourthIcon, fourthWidthStyle]}
        >
          <LinearGradient
            colors={["#D19A08", "#FEDB7E", "#D19A08"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradientBackground}
          >
            <View style={styles.iconContainer}>
              <Ionicons name="home-outline" size={28} color="#000" />
            </View>
            <Animated.Text style={[styles.text, opacityText]}>
              Home
            </Animated.Text>
          </LinearGradient>
        </Animated.View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handlePress}>
        <Animated.View style={[styles.tabContainer, plusIcon]}>
          <ImageBackground
            source={require("../assets/images/Ham-Btn.png")}
            style={styles.backgroundImage}
          ></ImageBackground>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default SecondType;

const styles = StyleSheet.create({
  container: {
    zIndex: 100,
  },
  contentContainer: {
    position: "absolute",
    bottom: 30,
    right: 30,
    borderRadius: 25, 
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  gradientBackground: {
    flex: 1,
    borderRadius: 25, 
    flexDirection: "row",
    alignItems: "center",
  },
  tabContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
    borderRadius: 25, 
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  backgroundImage: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  iconContainer: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 25,
    height: 25,
  },
  text: {
    textAlign: "center",
    color: "#000",
    fontWeight: "600",
    fontSize: 18,
  },
});

