import React from 'react';
import {StyleSheet, View} from 'react-native';
import Login from './screens/Login';

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Login />
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
});

export default App;
