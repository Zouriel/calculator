import { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import { router } from "expo-router";
import MathFactSection from "./components/MathFact";

export default function Index() {
  const [mathFact, setMathFact] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const handleBasicCalculator = () => {
    router.replace("/BasicCalculator");
  };

  const handleScientificCalculator = () => {
    router.replace("/ScientificCalculator");
  };

  const fetchMathFact = async () => {
    try {
      const response = await fetch('http://numbersapi.com/random/math?json');
      const data = await response.json();
      setMathFact(data.text);
    } catch (error) {
      console.error('Error fetching math fact:', error);
      setMathFact("Couldn't fetch a fact, try again later!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMathFact();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>Pick Your Calculator ✨</Text>

        <TouchableOpacity style={styles.button} onPress={handleBasicCalculator}>
          <Text style={styles.buttonText}>🧮 Basic Mode</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonAlt} onPress={handleScientificCalculator}>
          <Text style={styles.buttonTextAlt}>🔬 Scientific Mode</Text>
        </TouchableOpacity>
      </View>

      <MathFactSection loading={loading} mathFact={mathFact} fetchMathFact={fetchMathFact} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff0f6", // Soft pastel pink background
    paddingHorizontal: 20,
    justifyContent: "space-between",
    paddingTop: 60,
    paddingBottom: 30,
  },
  topContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    color: "#ff69b4", // Hot Pink
    fontWeight: "bold",
    marginBottom: 40,
    fontFamily: "System",
    textShadowColor: "#ffc0cb",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  button: {
    backgroundColor: "#ffb6c1",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
    shadowColor: "#ff69b4",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonAlt: {
    backgroundColor: "#dda0dd",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
    shadowColor: "#ba55d3",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "600",
    letterSpacing: 1,
  },
  buttonTextAlt: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "600",
    letterSpacing: 1,
  },
  factContainer: {
    backgroundColor: "#ffe4e9",
    marginTop: 20,
    borderRadius: 20,
    padding: 15,
    shadowColor: "#ff69b4",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 3,
  },
  factText: {
    fontSize: 16,
    textAlign: "center",
    color: "#555",
    fontStyle: "italic",
  },
});
