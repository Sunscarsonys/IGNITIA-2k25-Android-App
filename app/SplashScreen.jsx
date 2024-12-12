import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SplashScreen() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("LoginScreen");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>This is Splash Screen</Text>
      <TouchableOpacity onPress={handlePress}>
        <Text style={{ color: "blue", marginTop: 20 }}>
          Click here to reach login screen
        </Text>
      </TouchableOpacity>
    </View>
  );
}
