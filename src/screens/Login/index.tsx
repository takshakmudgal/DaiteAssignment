import React, {useState} from 'react';
import LogoSection from '../../components/LogoSection';
import GetStartedButton, {SignUpModal} from '../../components/GetStartedButton';
import {StyleSheet, View} from 'react-native';
import SignInButton from '../../components/SignInButton';
import TOS from '../../components/TOS';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login = ({navigation}: LoginProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleGetStartedPress = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <View style={styles.container}>
        <LogoSection />
        <View style={buttonStyles.buttonContainer}>
          <GetStartedButton onPress={handleGetStartedPress} />
          <SignInButton onPress={() => navigation.navigate('Details')} />
        </View>
        <TOS />
        <SignUpModal visible={isModalVisible} onClose={handleCloseModal} />
      </View>
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

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;
