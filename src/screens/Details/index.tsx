import {StyleSheet, View} from 'react-native';
import React from 'react';
import DetailsInput from '../../components/DetailsInput';

const Details = () => {
  return (
    <View style={styles.container}>
      <DetailsInput />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    padding: 30,
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
  },
});
