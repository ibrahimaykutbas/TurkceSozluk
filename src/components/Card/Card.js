import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import colors from '../../utils/color';

export function CardContainer({children, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: 'white',
        borderRadius: 6,
        paddingHorizontal: 12,
        paddingVertical: 16,
        marginBottom: 10,
      }}>
      <View
        style={{
          borderLeftWidth: 3,
          borderLeftColor: colors.light,
          paddingLeft: 12,
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );
}

export function CardTitle({children}) {
  return (
    <View>
      <Text
        style={{fontSize: 18, fontWeight: 'bold', color: colors.textMedium}}>
        {children}
      </Text>
    </View>
  );
}

export function CardSummary({children}) {
  return (
    <View>
      <Text style={{fontSize: 14, color: colors.textMedium, marginTop: 8}}>
        {children}
      </Text>
    </View>
  );
}
