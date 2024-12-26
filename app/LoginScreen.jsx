import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function LoginScreen() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/(drawer)/(tabs)/HeroScreen");
  };

  const handleForget = () => {
    router.push("/ResetScreen");
  };

  const handleSignUp = () => {
    router.push("/RegisterScreen");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/ignitia.png")}
        style={styles.logo}
      />
      <View style={styles.inputWrapper}>
        <Text style={styles.title}>Sign In</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="call-outline" size={24} color="#fff" />
          <TextInput
            style={styles.input}
            placeholder="+91"
            placeholderTextColor="#ffffffaa"
            keyboardType="phone-pad"
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={24} color="#fff" />
          <TextInput
            style={styles.input}
            placeholder="Your Password"
            placeholderTextColor="#ffffffaa"
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity onPress={handleForget}>
          <Text style={styles.forgetPassword}>Forget Password</Text>
        </TouchableOpacity>
        <LinearGradient
          colors={["#D19A08", "#FEDB7E", "#D19A08"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.signInButton}
        >
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.signInText}>SIGN IN</Text>
          </TouchableOpacity>
        </LinearGradient>
        <TouchableOpacity style={styles.signUpWrapper} onPress={handleSignUp}>
          <Text style={styles.signUpText}>
            Don't have an account?{" "}
            <Text style={styles.signUpLink}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0E0019",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    top: 30,
    width: 260,
    height: 100,
  },
  title: {
    textAlign: "center",
    fontSize: 46,
    color: "#fff",
    marginBottom: 30,
    fontWeight: "600",
  },
  inputWrapper: {
    marginTop: -30,
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignSelf: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 14,
    width: "100%",
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
  forgetPassword: {
    color: "#CC9913",
    alignSelf: "flex-end",
    fontFamily: "Poppins",
    marginTop: -10,
    marginBottom: 20,
    paddingRight: 15,
  },
  signUpWrapper: {
    justifyContent: "center",
    alignSelf: "center",
  },
  signInButton: {
    alignSelf: "center",
    width: "70%",
    height: 54,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  signInText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "500",
  },
  signUpText: {
    fontFamily: "Poppins",
    color: "#fff",
    fontSize: 14,
  },
  signUpLink: {
    color: "#CC9913",
  },
});
