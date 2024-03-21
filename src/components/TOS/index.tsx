import React from 'react';
import {Text, StyleSheet, Linking} from 'react-native';

const TOS = () => {
  const handleLinkPress = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log(`Don't know how to open this URL: ${url}`);
    }
  };

  return (
    <>
      <Text style={tosStyles.tos}>
        By continuing, you agree to Daite's{' '}
        <Text
          style={tosStyles.underlinedText}
          onPress={() => handleLinkPress('/')}>
          Terms of Service
        </Text>{' '}
        and{' '}
        <Text
          style={tosStyles.underlinedText}
          onPress={() => handleLinkPress('/')}>
          Privacy Policy
        </Text>
      </Text>
    </>
  );
};

const tosStyles = StyleSheet.create({
  tos: {
    bottom: '-18%',
    color: '#1E1E1E66',
    fontSize: 12,
    maxWidth: 200,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  underlinedText: {
    color: 'black',
    textDecorationLine: 'underline',
  },
});

export default TOS;
