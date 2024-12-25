import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function LoginScreen() {
  const handleLogin = () => {
    router.push("/(drawer)/(tabs)/HeroScreen");
  };

  const handleRegister = () => {
    router.push("/RegisterScreen");
  };

  const handleVerification = () => {
    router.push("/VerificationScreen");
  };

  const handleNotifications = () => {
    router.push("/NotificationScreen");
  };

  const handleReset = () => {
    router.push("/ResetScreen");
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
      <TouchableOpacity onPress={handleReset}>
        <Text style={{ color: "blue", fontSize: 18, marginTop: 10 }}>
          Reset
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleNotifications}>
        <Text style={{ color: "blue", fontSize: 18, marginTop: 10 }}>
          Notifications
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleVerification}>
        <Text style={{ color: "blue", fontSize: 18, marginTop: 10 }}>
          Verify
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRegister}>
        <Text style={{ color: "blue", fontSize: 18, marginTop: 10 }}>
          Register
        </Text>
      </TouchableOpacity>
    </View>
  );
}
