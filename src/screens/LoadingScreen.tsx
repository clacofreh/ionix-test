import {View, ActivityIndicator} from 'react-native';
import React from 'react';
import {globalStyle} from '../globallStyles';

const LoadingScreen = () => {
  return (
    <View style={globalStyle.container}>
      <ActivityIndicator size={50} color="black" />
    </View>
  );
};

export default LoadingScreen;
