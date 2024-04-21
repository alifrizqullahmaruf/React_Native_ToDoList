import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'shaun', key: '1' },
    { name: 'yoshi', key: '2' },
    { name: 'mario', key: '3' },
    { name: 'luigi', key: '4' },
    { name: 'peach', key: '5' },
    { name: 'toad', key: '6' },
    { name: 'bowser', key: '7' },
  ]);

  const handleClick = (id) => {
    //? Log `id` ke konsol
    console.log(id);
  
    //? Menggunakan setPeople untuk memperbarui state `people`
    setPeople(prevPeople => 
      // Mengembalikan array baru dengan menggunakan filter untuk menyaring elemen yang memiliki `key` tidak sama dengan `id` yang diterima
      prevPeople.filter(person => person.key !== id)
    );
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.headline}>Touchable Components</Text>
      </View>

      <FlatList
        numColumns={2}
        style={styles.listContainer}
        keyExtractor={(item) => item.key}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => handleClick(item.key)}>
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  headline: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  listContainer: {
    marginTop: 16,
  },
  item: {
    flex: 1,
    margin: 8,
    padding: 20,
    backgroundColor: 'aqua',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
});
