import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';

interface SignInButtonProps extends TouchableOpacityProps {}

const SignInButton: React.FC<SignInButtonProps> = props => {
  return (
    <>
      <TouchableOpacity style={signInButtonStyles.signInButton} {...props}>
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
