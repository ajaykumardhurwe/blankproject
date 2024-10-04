import React from 'react';
import { StyleSheet, View, Button, Linking, Alert, Image } from 'react-native';
import QuestionForm from '../components/QuestionForm';
export default function App() {

  const openWhatsApp = () => {
    let phoneNumber = "-919301084259"; // Replace with the recipient's phone number in international format
    let text = "Hello, this is a test message";
    let url = `whatsapp://send?phone=${phoneNumber}&text=${text}`;
    Linking.openURL(url)
      .then((supported) => {
        if (!supported) {
          Alert.alert('WhatsApp is not installed on your device');
        }
      })
      .catch((err) => console.error('An error occurred', err));
  };
  return (
    <View style={styles.container}>
      <QuestionForm />

      <View style={styles.container}>
      {/* <Image source={require('../assets/logo.png')} style={styles.logo} /> */}
      <Button title="Chat on WhatsApp" onPress={openWhatsApp} />
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   backgroundColor: '#f5f5f5',
  // },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },


  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});


