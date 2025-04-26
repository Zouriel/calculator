import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';

export default function MathFactSection() {
  const [mathFact, setMathFact] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchMathFact = () => {
    try {
      setLoading(true);
      const randomIndex = Math.floor(Math.random() * Facts.length);
      setMathFact(Facts[randomIndex]);
    } catch (error) {
      
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
const Facts = [
    "0 is the only number that can't be represented in Roman numerals.",
    "A 'googol' is the number 1 followed by 100 zeros.",
    "The number π (pi) is irrational – it cannot be expressed as a simple fraction.",
    "The Fibonacci sequence is found in nature, such as in sunflowers and pinecones.",
    "The sum of all numbers from 1 to 100 is 5050.",
    "A circle has 360 degrees because of the Babylonians' base-60 number system.",
    "There are infinitely many prime numbers.",
    "The number 9 has a special property: any number multiplied by 9 and summed returns 9.",
    "Zero was independently invented by the Babylonians, Mayans, and Indians.",
    "The Pythagorean theorem states that a² + b² = c² for right triangles.",
    "A triangle always has angles that add up to 180 degrees.",
    "There are exactly 13 Archimedean solids.",
    "A perfect number is a number equal to the sum of its proper divisors, like 28.",
    "The smallest prime number is 2, and it’s also the only even prime.",
    "The golden ratio is approximately 1.618 and appears in art, architecture, and nature.",
    "A palindrome number reads the same backward as forward, like 121 or 1331.",
    "A hexagon is the most efficient shape for tiling a surface without gaps (like honeycombs!).",
    "The sum of the angles of a quadrilateral is 360 degrees.",
    "There are infinitely many solutions to the equation x² + y² = z².",
    "A googolplex is 1 followed by a googol of zeros – too big to write in the universe!",
  ];
  
