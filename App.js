import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./components/hearder";

export default function App() {
  const [listTask, setListTask] = useState([
    { task: "Makan mie", key: "1" },
    { task: "Project", key: "2" },
    { task: "Blender (Kampus)", key: "3" },
  ]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />
      <View style={styles.content}>
        {/* List */}
        <View style={styles.listContainer}>
          <FlatList 
            data={listTask}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={styles.text}>{item.task}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1, // Untuk memastikan konten mengisi seluruh ruang yang tersedia
  },
  listContainer: {
    marginTop: 16,
    flex: 1, // Memastikan FlatList mengisi seluruh ruang yang tersedia di dalam content
  },
  item: {
    margin: 8,
    padding: 20,
    backgroundColor: "aqua",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    textAlign: "center",
  },
});
