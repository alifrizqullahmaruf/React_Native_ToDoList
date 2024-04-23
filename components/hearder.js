import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>My Todo</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold' // Menambahkan gaya tebal untuk judul header
    }
});
