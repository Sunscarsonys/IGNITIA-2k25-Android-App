import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="SplashScreen" options={{ headerShown: false }} />
      <Stack.Screen name="LoginScreen" options={{ headerShown: false }} />
      <Stack.Screen name="RegisterScreen" options={{ headerShown: false }} />
      <Stack.Screen
        name="VerificationScreen"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="ResetScreen" options={{ headerShown: false }} />
      <Stack.Screen name="drawer" options={{ headerShown: false }} />
    </Stack>
  );
}
