import React from 'react';
import { View, StyleSheet, Text, Linking } from 'react-native';

export const Header = ({ subheading }) => (
  <View style={s.header}>
    <Text style={s.header__heading}>E+</Text>
    <Text style={s.header__subheading}>{subheading}</Text>
  </View>
);

Header.defaultProps = {
  copy: true,
};

const s = StyleSheet.create({
  header: {
    paddingBottom: 40,
  },

  header__heading: {
    marginBottom: 5,

    fontSize: 28,
    color: '#404040',
    textAlign: 'center',
  },

  header__subheading: {
    fontSize: 16,
    color: '#b5b5b5',
    textAlign: 'center',
  },

  header__copy: {
    marginTop: 20,
    marginHorizontal: 40,

    fontSize: 14,
    color: '#b5b5b5',
    textAlign: 'center',
  },

  header__author: {
    color: '#404040',
  },
});
