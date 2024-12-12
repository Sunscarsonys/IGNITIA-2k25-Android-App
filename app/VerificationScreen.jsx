import { Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function VerificationScreen() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>This is Verification Screen</Text>

      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}
