import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const GetStartedButton = () => {
  return (
    <>
      <TouchableOpacity style={getStartedButtonStyles.signUpButton}>
        <Text style={getStartedButtonStyles.getStarted}>Get Started</Text>
      </TouchableOpacity>
    </>
  );
};

const getStartedButtonStyles = StyleSheet.create({
  signUpButton: {
    alignItems: 'center',
    backgroundColor: '#FFA737',
    paddingVertical: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D08424',
    width: '100%',
  },
  getStarted: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default GetStartedButton;
