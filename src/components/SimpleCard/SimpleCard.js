import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './SimpleCard.style';

export function SimpleCardContainer({children, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {children}
    </TouchableOpacity>
  );
}

export function SimpleCardTitle({children}) {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}
