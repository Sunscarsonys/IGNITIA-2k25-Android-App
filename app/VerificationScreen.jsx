import React, { useState } from "react";
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

export default function VerificationScreen() {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputs = [];

  const handleInputChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      const nextInput = index + 1;
      inputs[nextInput]?.focus();
    }
  };

  const handleBackspace = (index) => {
    if (index > 0 && otp[index] === "") {
      inputs[index - 1]?.focus();
    }
  };

  const handleContinue = () => {
    console.log("OTP Verified:", otp.join(""));
    router.push("/LoginScreen");
  };

  return (
    <View style={styles.container}>
      <Ionicons
        name="arrow-back"
        size={24}
        color="#fff"
        style={styles.backIcon}
        onPress={() => router.back()}
      />
      <Text style={styles.title}>Verification</Text>
      <Text style={styles.subtitle}>
        We have sent you the verification code at +91-2222222222
      </Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(input) => (inputs[index] = input)}
            style={styles.otpInput}
            maxLength={1}
            keyboardType="numeric"
            value={digit}
            onChangeText={(value) => handleInputChange(value, index)}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === "Backspace") {
                handleBackspace(index);
              }
            }}
          />
        ))}
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
      <Text style={styles.resendCode}>
        Re-send Code in <Text style={styles.timer}>0:30</Text>
      </Text>
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
    color: "#EEEEEE",
    textAlign: "center",
    marginBottom: 30,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 30,
  },
  otpInput: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 10,
    borderColor: "#CC9913",
    borderWidth: 1,
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    textAlignVertical: "center",
    width: 54,
    height: 54,
    fontFamily: "Poppins",
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
  resendCode: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
    marginTop: 20,
  },
  timer: {
    color: "#D19A08",
  },
});
