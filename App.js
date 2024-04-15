import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Welcome to Header!</Text>
      </View>
      <View style={styles.Body}>
        <Text style={styles.boldText}>Welcome to Body!</Text>
        <Text style={styles.BodyText}> lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    backgroundColor: 'blue',
    height: 50,
    width: '100%',
  },
  boldText:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  Body:{
    backgroundColor:'red',
    height: 100,
    width: '100%',
  },
  BodyText:{
    color: 'white',
    fontSize: 10,
    textAlign: 'center',
  }
});
