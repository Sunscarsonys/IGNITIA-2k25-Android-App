import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Index() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("SplashScreen");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 36,
          fontWeight: "bold",
        }}
      >
        IGNITIA 2K25
      </Text>
    </View>
  );
}
