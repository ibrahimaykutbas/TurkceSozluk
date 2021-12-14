import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './Card.style';

export function CardContainer({children, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.border}>{children}</View>
    </TouchableOpacity>
  );
}

export function CardTitle({children}) {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

export function CardSummary({children}) {
  return (
    <View>
      <Text style={styles.summary}>{children}</Text>
    </View>
  );
}
