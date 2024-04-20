import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';

export default function App() {
  // Object atau data yang akan digunakan untuk useState
  const [people, setPeople] = useState([
    { name: 'shaun', key: '1' },
    { name: 'yoshi', key: '2' },
    { name: 'mario', key: '3' },
    { name: 'luigi', key: '4' },
    { name: 'peach', key: '5' },
    { name: 'toad', key: '6' },
    { name: 'bowser', key: '7' },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.headline}>List and Scroll View</Text>
      </View>

      <FlatList
        style={styles.listContainer}
        keyExtractor={(item) => item.key}
        data={people}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        )}
      />

    </View>
  );
}

// Style pada tampilan
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 16,
  },
  headline: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 16,
  },
  inputContainer: {
    margin: 16,
  },
  listContainer: {
    marginTop: 16,
  },
  item: {
    marginTop: 16,
    padding: 20,
    backgroundColor: 'aqua',
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    fontSize:24,
    padding: 32,
    
  },
});
