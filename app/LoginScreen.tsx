import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { router } from "expo-router";

type RootStackParamList = {
  drawer: undefined;
};

export default function LoginScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleLogin = () => {
    router.push("/drawer");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>This is Login Screen</Text>
      <TouchableOpacity onPress={handleLogin}>
        <Text style={{ color: "blue", fontSize: 18, marginTop: 10 }}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}
