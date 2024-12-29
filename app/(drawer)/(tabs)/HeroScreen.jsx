import { Text, View, StyleSheet } from "react-native";
import Header from "@/components/Header";
import SecondType from "@/components/SecondType";

export default function HeroScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>This is Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#0E0019",
    justifyContent: "flex-start",
  },
  secondType: {
    position: "absolute",
    bottom: 100,
    right: 100,
  },
});
