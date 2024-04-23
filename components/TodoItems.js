// TodoItems.js

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TodoItems({ items, selectHandler }) {
    return (
        <TouchableOpacity onPress={selectHandler} style={styles.item}>
            <Text style={styles.text}>
                {items.task}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
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
