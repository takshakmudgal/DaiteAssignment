import React, {useState} from 'react';
import LogoSection from '../../components/LogoSection';
import GetStartedButton, {SignUpModal} from '../../components/GetStartedButton';
import {StyleSheet, View} from 'react-native';
import SignInButton from '../../components/SignInButton';
import TOS from '../../components/TOS';

const Login = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleGetStartedPress = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <LogoSection />
      <View style={buttonStyles.buttonContainer}>
        <GetStartedButton onPress={handleGetStartedPress} />
        <SignInButton />
      </View>
      <TOS />
      <SignUpModal visible={isModalVisible} onClose={handleCloseModal} />
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
