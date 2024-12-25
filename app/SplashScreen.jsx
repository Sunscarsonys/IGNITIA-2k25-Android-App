import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Modal,
  Animated,
  Easing,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function SplashScreen() {
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    const timer = setTimeout(() => {
      openModal();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const openModal = () => {
    setIsModalVisible(true);
    Animated.timing(modalAnimation, {
      toValue: 1,
      duration: 500,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(modalAnimation, {
      toValue: 0,
      duration: 300,
      easing: Easing.in(Easing.exp),
      useNativeDriver: true,
    }).start(() => setIsModalVisible(false));
  };

  const modalTranslateY = modalAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [500, 0],
  });

  return (
    <View style={styles.container}>
      <View style={styles.imageTextContainer}>
        <Image
          source={require("../assets/images/abhivriddhi-logo.png")}
          style={styles.image}
        />
        <Text style={styles.imageText}>
          The two-day techno-cultural fest of PSIT provides an enticing
          opportunity to students to showcase their potential. A plethora of
          activities exploring the vast domains of technology and culture take
          place, igniting the spirit of the participants and the audience alike.
          This carnival of events makes way for profound entertainment and
          holistic learning that leaves an unwavering impact on the audience. An
          all round cultural fiesta with fascinating execution of cutting edge
          tech is put on display, which fills the campus with an infectious
          energy, leaving everyone craving for more.
        </Text>
      </View>

      <Modal visible={isModalVisible} transparent animationType="none">
        <View style={styles.modalContainer}>
          <Animated.View
            style={[
              styles.modalContent,
              { transform: [{ translateY: modalTranslateY }] },
            ]}
          >
            <LinearGradient
              colors={["#C99611", "#EAC871"]}
              style={styles.modalBackground}
            >
              <Text style={styles.modalHeading}>
                Register for all the Upcoming Events for Ignitia 2K25.
              </Text>
              <Text style={styles.modalDescription}>
                Be notified about every update that takes place in IGNITIA 2K25.
              </Text>
              <TouchableOpacity
                style={styles.signInButton}
                onPress={() => navigation.navigate("LoginScreen")}
              >
                <View style={styles.buttonContent}>
                  <Text style={styles.signInText}>SIGN IN</Text>
                  <Icon name="arrow-forward" size={24} color="white" />
                </View>
              </TouchableOpacity>
            </LinearGradient>
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0E0019",
    padding: 20,
  },
  imageTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "20%", 
    alignSelf: "center",
  },
  image: {
    width: "90%",
    height: "100%",
    resizeMode: "contain",
  },
  imageText: {
    fontSize: 12,
    color: "#E2E2E2",
    textAlign: "center",
    fontFamily: "Poppins",
    marginTop: 0, 
    paddingTop: 0,
    paddingLeft: 14,
    paddingRight: 14,
    marginBottom: 0,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalContent: {
    width: "100%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    overflow: "hidden",
  },
  modalBackground: {
    padding: 30,
    alignItems: "center",
  },
  modalHeading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginBottom: 20,
  },
  modalDescription: {
    fontSize: 16,
    color: "black",
    textAlign: "center",
    marginBottom: 20,
    padding: 10,
  },
  signInButton: {
    backgroundColor: "black",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 14,
    marginBottom: 20,
    width: "80%",
  },
  buttonContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  signInText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    flex: 1,
  },
});
