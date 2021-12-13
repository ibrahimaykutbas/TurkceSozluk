import React, {useCallback} from 'react';
import {View, Text, StatusBar} from 'react-native';

import {useFocusEffect} from '@react-navigation/native';

const History = () => {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBackgroundColor('black');
    }, []),
  );
  return (
    <View>
      <Text>History</Text>
    </View>
  );
};

export default History;
