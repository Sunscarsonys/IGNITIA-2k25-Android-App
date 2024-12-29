import { Text, View } from "react-native";
import Header from "@/components/Header";

export default function SearchScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#0E0019",
      }}
    >
      <Header></Header>
      <Text>This is Search Screen</Text>
    </View>
  );
}
