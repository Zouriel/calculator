import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';

export default function MathFactSection() {
  const [mathFact, setMathFact] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchMathFact = async () => {
    try {
      setLoading(true);
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
    <View style={styles.factContainer}>
      <Text style={styles.factHeading}>🌟 Math Fact of the Day</Text>
      <Text style={styles.factSubheading}>Did you know?</Text>

      {loading ? (
        <ActivityIndicator size="small" color="#ff69b4" style={{ marginVertical: 10 }} />
      ) : (
        <Text style={styles.factText}>
          📚 {mathFact}
        </Text>
      )}

      <View style={styles.buttonsRow}>
        <TouchableOpacity style={styles.button} onPress={fetchMathFact}>
          <Text style={styles.buttonText}>🔄 New Fact</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={() => alert('Saved! 💾')}>
          <Text style={styles.buttonText}>❤️ Save</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  factContainer: {
    backgroundColor: "#ffe4e9",
    marginTop: 20,
    marginBottom: 30,
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#ff69b4",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 3,
  },
  factHeading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ff69b4",
    marginBottom: 5,
  },
  factSubheading: {
    fontSize: 16,
    color: "#ba55d3",
    marginBottom: 15,
    fontStyle: "italic",
  },
  factText: {
    fontSize: 16,
    textAlign: "center",
    color: "#555",
    marginVertical: 10,
    lineHeight: 24,
  },
  buttonsRow: {
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#ffb6c1",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginHorizontal: 5,
    elevation: 2,
  },
  saveButton: {
    backgroundColor: "#dda0dd",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
});
