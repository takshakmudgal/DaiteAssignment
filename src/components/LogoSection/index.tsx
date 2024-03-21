import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const LogoSection = () => {
  return (
    <>
      <Image
        source={require('../../../public/images/logo.png')}
        style={logoSectionStyles.logo}
      />
      <View style={logoSectionStyles.sloganContainer}>
        <Text style={logoSectionStyles.title}>daite</Text>
        <Text style={logoSectionStyles.slogan}>
          Find a soulmate that you ever wanted to find
        </Text>
      </View>
    </>
  );
};

export default LogoSection;

const logoSectionStyles = StyleSheet.create({
  sloganContainer: {
    bottom: '-5%',
    alignItems: 'center',
  },
  logo: {
    width: 152,
    height: 152,
    top: '-10%',
  },
  title: {
    fontSize: 38,
    fontWeight: '700',
    color: '#FFA737',
    marginBottom: 10,
  },
  slogan: {
    color: '#080808',
    fontSize: 16,
    fontWeight: '500',
    maxWidth: 250,
    textAlign: 'center',
    lineHeight: 24,
  },
});
