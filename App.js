import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  // Object atau data yang akan di gunnakan untuk useState
  const [name, setName] = React.useState('ALip');
  const [person, setperson] = React.useState({name: "Badrun", age: "20"});

  // Fungsi yang di panggi pada button
  const clickHandler = () => {
    setName("Alif Rizz");
    setperson({name: "Badrun Rizz", age: "29"});
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>My name is {name}</Text>
        <Text style={styles.boldText}>His name is {person.name} and his age is {person.age}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Add Some Rizzz' onPress={clickHandler} color="#841584"/>
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
  },
  header:{
    backgroundColor: 'blue',
    height: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boldText:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  buttonContainer:{
    marginTop: 20,
    width: 200,
    borderRadius: 10,
    overflow: 'hidden',
  },
});
