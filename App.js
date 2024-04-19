import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  // Object atau data yang akan digunakan untuk useState
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.boldText}>Input Name</Text>
        <TextInput 
          style={styles.input} 
          placeholder='e.g. John Cena' 
          onChangeText={(val) => setName(val)} 
          multiline={false} // Set false agar tidak multiline
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.boldText}>Input Age</Text>
        <TextInput 
          style={styles.input} 
          placeholder='e.g. 99' 
          onChangeText={(val) => setAge(val)} 
          keyboardType='numeric'
        />
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>His name is {name} and his age is {age}</Text>
      </View>
    </View>
  );
}

// Style pada tampilan
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20, // Padding horizontal agar konten tidak terlalu dekat dengan tepi layar
  },
  inputContainer: {
    marginBottom: 20, // Memberi jarak antara input fields
  },
  resultContainer: {
    marginTop: 20, // Memberi jarak antara input fields dengan hasil
  },
  boldText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10, // Memberi jarak antara teks dengan input fields
  },
  input: {
    borderColor: '#777',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: 200,
    height: 40,
  },
  resultText: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  },
});
