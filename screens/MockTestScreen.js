import React from 'react';
import { StyleSheet, View } from 'react-native';
import MCQTest from '../components/MCQTest';
export default function App() {
  return (
    <View style={styles.container}>
      <MCQTest />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
