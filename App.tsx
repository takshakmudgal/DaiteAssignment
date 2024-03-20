import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Image
          source={require('./public/images/logo.png')}
          style={styles.logo}
        />
        <View style={styles.sloganContainer}>
          <Text style={styles.title}>daite</Text>
          <Text style={styles.slogan}>
            Find a soulmate that you ever wanted to find
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.signUpButton}>
            <Text style={styles.getStarted}>Get Started</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signInButton}>
            <Text style={styles.signInText}>I already have an account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sloganContainer: {
    bottom: '-5%',
    alignItems: 'center',
  },
  buttonContainer: {
    bottom: '-15%',
    width: '80%',
    rowGap: 10,
  },
  logo: {
    width: 152,
    height: 152,
    top: '-10%',
  },
  title: {
    fontSize: 38,
    fontWeight: '700',
    color: '#FFA737',
    marginBottom: 10,
  },
  slogan: {
    color: '#080808',
    fontSize: 16,
    fontWeight: '500',
    maxWidth: 250,
    textAlign: 'center',
    lineHeight: 24,
  },
  signUpButton: {
    alignItems: 'center',
    backgroundColor: '#FFA737',
    paddingVertical: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D08424',
    width: '100%',
  },
  signInButton: {
    alignItems: 'center',
    backgroundColor: '#FFA73730',
    paddingVertical: 14,
    borderRadius: 10,
    width: '100%',
  },
  getStarted: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signInText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
