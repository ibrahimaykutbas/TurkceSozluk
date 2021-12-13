import React, {useCallback} from 'react';
import {View, Text, StatusBar} from 'react-native';

import {useFocusEffect} from '@react-navigation/native';

const Favorite = () => {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBackgroundColor('black');
    }, []),
  );
  return (
    <View>
      <Text>Favorite</Text>
    </View>
  );
};

export default Favorite;
