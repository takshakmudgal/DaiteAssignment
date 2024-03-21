import React, {useState} from 'react';
import {TextInput, Text, StyleSheet} from 'react-native';

const DetailsInput = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

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
        autoCapitalize={'characters'}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Last name"
        placeholderTextColor="#3B3C4150"
        onChangeText={setLastName}
        value={lastName}
      />
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
  },
});

export default DetailsInput;
