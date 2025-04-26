import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useRouter, useSegments } from "expo-router";

export default function Footer() {
  const router = useRouter();
  const segments = useSegments();

  const isActive = (path: string) => {
    return segments[segments.length - 1] === path || (path === '' && segments[segments.length - 1] === undefined);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tab, styles.homeTab, isActive("") && styles.activeTab]}
        onPress={() => router.replace("/")}
      >
        <Text style={[styles.homeIcon, isActive("") && styles.activeTabText]}>
          🏠
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tab, isActive("BasicCalculator") && styles.activeTab]}
        onPress={() => router.push("/BasicCalculator")}
      >
        <Text style={[styles.tabText, isActive("BasicCalculator") && styles.activeTabText]}>
          🧮 Basic
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tab, isActive("ScientificCalculator") && styles.activeTab]}
        onPress={() => router.push("/ScientificCalculator")}
      >
        <Text style={[styles.tabText, isActive("ScientificCalculator") && styles.activeTabText]}>
          🔬 Scientific
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#ffe4e9",
    height: 70,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
    overflow: "hidden",
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  homeTab: {
    flex: 0.6, // Slightly smaller tab for Home button
  },
  activeTab: {
    backgroundColor: "#ffc0cb",
  },
  tabText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#555",
  },
  activeTabText: {
    color: "#fff",
  },
  homeIcon: {
    fontSize: 24, // Slightly bigger icon so it looks centered
    color: "#555",
  },
});
