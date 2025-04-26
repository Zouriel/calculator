import { Stack, useSegments } from "expo-router";
import { View, StyleSheet } from "react-native";
import Footer from "./components/Footer";

export default function Layout() {
  const segments = useSegments();

  const hideFooter = segments.length === 0 || segments[segments.length - 1] === ""; 
  // Hide footer if we're on Home (/)

  return (
    <View style={styles.container}>
      <Stack screenOptions={{ headerShown: false }} />

      {!hideFooter && <Footer />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});