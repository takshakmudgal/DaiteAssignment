import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const SignInButton = () => {
  return (
    <>
      <TouchableOpacity style={signInButtonStyles.signInButton}>
        <Text style={signInButtonStyles.signInText}>
          I already have an account
        </Text>
      </TouchableOpacity>
    </>
  );
};

const signInButtonStyles = StyleSheet.create({
  signInButton: {
    alignItems: 'center',
    backgroundColor: '#FFA73730',
    paddingVertical: 14,
    borderRadius: 10,
    width: '100%',
  },
  signInText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default SignInButton;
