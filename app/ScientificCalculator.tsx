import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Footer from './components/Footer';

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
      <View style={styles.display}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Text style={styles.displayText}>{input || '0'}</Text>
        </ScrollView>
      </View>

      <View style={styles.buttonsContainer}>
        {scientificButtons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((button) => (
              <TouchableOpacity
                key={button}
                style={[
                  styles.button,
                  button === '=' ? styles.equalsButton : null,
                  button === 'C' ? styles.clearButton : null,
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
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.6)",
    margin: 10,
    borderRadius: 20,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
    elevation: 5,
  },
  displayText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: "#ba55d3",
  },
  buttonsContainer: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    height: 70,
    backgroundColor: "#ffc0cb", // light pink buttons
    margin: 5,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  equalsButton: {
    backgroundColor: "#ba55d3", // dark lavender for '='
  },
  clearButton: {
    backgroundColor: "#ff69b4", // hot pink for 'C'
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: "#fff",
  },
});
