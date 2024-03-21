import React, {useState, useEffect} from 'react';
import {
  Keyboard,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const DetailsInput = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  const handleKeyboardDidShow = () => {
    setKeyboardVisible(true);
  };

  const handleKeyboardDidHide = () => {
    setKeyboardVisible(false);
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      handleKeyboardDidShow,
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      handleKeyboardDidHide,
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const combinedButtonContainerStyle = StyleSheet.flatten([
    styles.buttonContainer,
    keyboardVisible && styles.buttonContainerKeyboard,
  ]);

  return (
    <>
      <Text style={styles.heading}>Enter your details</Text>
      <Text style={styles.subHeading}>
        Driver will confirm it's you upon arrival
      </Text>
      <TextInput
        style={styles.inputField}
        placeholder="First name"
        placeholderTextColor="#3B3C4150"
        onChangeText={setFirstName}
        value={firstName}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Last name"
        placeholderTextColor="#3B3C4150"
        onChangeText={setLastName}
        value={lastName}
      />

      <View style={[combinedButtonContainerStyle]}>
        <Text style={styles.privacyText}>
          All this data will be kept as a secret from all the viewers
        </Text>
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    color: '#3B3C41',
    fontSize: 24,
  },
  subHeading: {
    color: '#3B3C4150',
    fontSize: 14,
    marginBottom: 20,
  },
  inputField: {
    marginTop: 10,
    padding: 10,
    borderColor: '#F2F2F2',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#F2F2F2',
    color: '#3B3C41',
  },
  buttonContainer: {
    padding: 30,
    marginBottom: 10,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
  },
  buttonContainerKeyboard: {
    marginBottom: 0,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  nextButton: {
    backgroundColor: '#FFA737',
    padding: 15,
    borderColor: '#D08424',
    borderWidth: 1,
    borderRadius: 10,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  privacyText: {
    color: '#3B3C4160',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default DetailsInput;
