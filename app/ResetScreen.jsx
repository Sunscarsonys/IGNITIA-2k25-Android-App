import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function ResetScreen() {
  const router = useRouter();
  const handleContinue = () => {
    // Add logic for password reset
    console.log("Password reset process initiated");
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <Ionicons
        name="arrow-back"
        size={24}
        color="#fff"
        style={styles.backIcon}
        onPress={handleBack}
      />
      <Text style={styles.title}>Reset Password</Text>
      <Text style={styles.subtitle}>Create your new password</Text>
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={24} color="#fff" />
        <TextInput
          style={styles.input}
          placeholder="Your Password"
          placeholderTextColor="#ffffffaa"
          secureTextEntry={true}
        />
        <Ionicons name="eye-off-outline" size={24} color="#fff" />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={24} color="#fff" />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#ffffffaa"
          secureTextEntry={true}
        />
        <Ionicons name="eye-off-outline" size={24} color="#fff" />
      </View>
      <LinearGradient
        colors={["#D19A08", "#FEDB7E", "#D19A08"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.continueButton}
      >
        <TouchableOpacity onPress={handleContinue}>
          <Text style={styles.continueText}>CONTINUE</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0E0019",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  backIcon: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 14,
    marginBottom: 20,
    paddingHorizontal: 15,
    height: 54,
    borderWidth: 1,
    borderColor: "#CC9913",
  },
  input: {
    flex: 1,
    color: "#EEEEEE",
    fontSize: 16,
    fontFamily: "Poppins",
    marginLeft: 10,
  },
  continueButton: {
    alignSelf: "center",
    width: "70%",
    height: 54,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  continueText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "500",
  },
});
