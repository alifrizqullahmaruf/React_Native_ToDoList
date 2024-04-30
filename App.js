import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' },
  ]);

  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key !== key);
    });
  };

  const submitHandler = (text) => {
    if(text.length > 3){
      setTodos(prevTodos => {
        return [
          { text, key: Math.random().toString() },
          ...prevTodos
        ];
      });
    } else {
      Alert.alert("Oops!", 'Todo must be over 3 letters!', [
        { text: 'OK', onPress: () => console.log("Alert Closed!") },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss() }>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
            style={styles.list} // Style FlatList untuk menerapkan flexbox
            contentContainerStyle={todos.length === 0 && styles.emptyList} // Style ketika daftar kosong
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1, // Menggunakan flex 1 agar konten dapat mengisi ruang yang tersedia
    padding: 40,
  },
  list: {
    flex: 1, // Menggunakan flex 1 agar FlatList mengisi ruang yang tersedia
    marginTop: 20,
  },
  emptyList: {
    justifyContent: 'center', // Pusatkan konten ketika daftar kosong
    alignItems: 'center',
  },
});
