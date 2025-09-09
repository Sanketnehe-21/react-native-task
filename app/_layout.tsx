import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerTitleAlign: "center",headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="login" options={{ title: "Login" }} />
      <Stack.Screen name="posts" options={{ title: "Posts" }} />
      <Stack.Screen name="counter" options={{ title: "Counter" }} />
    </Stack>
  );
}
