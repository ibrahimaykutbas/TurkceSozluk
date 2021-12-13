import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import colors from '../../utils/color';

export function SimpleCardContainer({children, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: 'white',
        borderRadius: 6,
        padding: 16,
        marginBottom: 10,
      }}>
      {children}
    </TouchableOpacity>
  );
}

export function SimpleCardTitle({children}) {
  return (
    <View>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: colors.textMedium,
        }}>
        {children}
      </Text>
    </View>
  );
}
