import React from 'react';
import LogoSection from '../../components/LogoSection';
import GetStartedButton from '../../components/GetStartedButton';
import {StyleSheet, View} from 'react-native';
import SignInButton from '../../components/SignInButton';
import TOS from '../../components/TOS';

const Login = () => {
  return (
    <>
      <LogoSection />
      <View style={buttonStyles.buttonContainer}>
        <GetStartedButton />
        <SignInButton />
      </View>
      <TOS />
    </>
  );
};

const buttonStyles = StyleSheet.create({
  buttonContainer: {
    bottom: '-15%',
    width: '80%',
    rowGap: 10,
  },
});
export default Login;
