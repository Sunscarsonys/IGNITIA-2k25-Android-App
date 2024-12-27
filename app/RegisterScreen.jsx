import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function SignUpScreen() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleSignUp = () => {
    console.log("Sign Up button pressed");
    router.push("/VerificationScreen");
  };

  const inputs = [
    { id: "1", placeholder: "Your Name", icon: "person-outline" },
    { id: "2", placeholder: "Your College", icon: "school-outline" },
    {
      id: "3",
      placeholder: "+91",
      icon: "call-outline",
      keyboardType: "phone-pad",
    },
    {
      id: "4",
      placeholder: "Your Password",
      icon: "lock-closed-outline",
      secureTextEntry: true,
    },
    {
      id: "5",
      placeholder: "Confirm Password",
      icon: "lock-closed-outline",
      secureTextEntry: true,
    },
  ];

  const renderInput = ({ item }) => (
    <View style={styles.inputContainer}>
      <Ionicons name={item.icon} size={22} color="#fff" />
      <TextInput
        style={styles.input}
        placeholder={item.placeholder}
        placeholderTextColor="#ffffffaa"
        keyboardType={item.keyboardType || "default"}
        secureTextEntry={item.secureTextEntry || false}
      />
    </View>
  );

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <FlatList
          data={inputs}
          renderItem={renderInput}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.inputWrapper}
          ListHeaderComponent={<Text style={styles.title}>Sign Up</Text>}
          ListFooterComponent={
            <View>
              <LinearGradient
                colors={["#D19A08", "#FEDB7E", "#D19A08"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.signUpButton}
              >
                <TouchableOpacity onPress={handleSignUp}>
                  <Text style={styles.signUpText}>SIGN UP</Text>
                </TouchableOpacity>
              </LinearGradient>
              <TouchableOpacity
                style={styles.signInWrapper}
                onPress={() => router.push("/LoginScreen")}
              >
                <Text style={styles.signInText}>
                  Already have an account?{" "}
                  <Text style={styles.signInLink}>Sign In</Text>
                </Text>
              </TouchableOpacity>
            </View>
          }
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0E0019",
    padding: 20,
    justifyContent: "center",
  },
  header: {
    top: 0,
    width: "100%",
    height: 40,
    padding: 0,
    margin: 0,
    backgroundColor: "#0E0019",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 42,
    color: "#fff",
    marginBottom: 30,
    fontWeight: "600",
  },
  inputWrapper: {
    marginTop: 30,
    width: "100%",
    paddingHorizontal: 5,
    paddingBottom: 20,
    alignSelf: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#CC9913",
    marginBottom: 20,
    paddingHorizontal: 15,
    height: 50,
  },
  input: {
    flex: 1,
    color: "#EEEEEE",
    fontSize: 16,
    fontFamily: "Poppins",
    marginLeft: 10,
  },
  signUpButton: {
    alignSelf: "center",
    width: "70%",
    height: 50,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  signUpText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "500",
  },
  signInWrapper: {
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
  },
  signInText: {
    fontFamily: "Poppins",
    color: "#fff",
    fontSize: 14,
  },
  signInLink: {
    color: "#CC9913",
  },
});
