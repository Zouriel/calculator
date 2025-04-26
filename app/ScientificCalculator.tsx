import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function ScientificCalculator() {
  const [input, setInput] = useState('');

  const handlePress = (value: string) => {
    if (value === 'C') {
      setInput('');
    } else if (value === '=') {
      try {
        const result = eval(input).toString();
        setInput(result);
      } catch {
        setInput('Error');
      }
    } else if (value === 'DEL') {
      setInput((prev) => prev.slice(0, -1));
    } else {
      setInput((prev) => prev + value);
    }
  };

  const scientificButtons = [
    ['sin', 'cos', 'tan', 'log'],
    ['√', '^', '(', ')'],
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+'],
    ['C', 'DEL'],
  ];

  return (
    <View style={styles.container}>
      {/* Display */}
      <View style={styles.display}>
        <ScrollView
          horizontal
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
          showsHorizontalScrollIndicator={false}
        >
          <Text style={styles.displayText}>{input || '0'}</Text>
        </ScrollView>
      </View>

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        {scientificButtons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((button) => (
              <TouchableOpacity
                key={button}
                style={[
                  styles.button,
                  button === '=' && styles.equalsButton,
                  button === 'C' && styles.clearButton,
                ]}
                onPress={() => handlePress(button)}
              >
                <Text style={styles.buttonText}>{button}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff0f6", // pastel pink background
    paddingTop: 50,
  },
  display: {
    backgroundColor: "rgba(255,255,255,0.6)",
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 15,
    minHeight: 80, // 👈 FORCE a minimum height!
    justifyContent: 'center',
    alignItems: 'flex-end',
    elevation: 5,
  },
  displayText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: "#ba55d3",
  },
  buttonsContainer: {
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    height: 70,
    backgroundColor: "#ffc0cb",
    margin: 5,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  equalsButton: {
    backgroundColor: "#ba55d3",
  },
  clearButton: {
    backgroundColor: "#ff69b4",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: "#fff",
  },
});
