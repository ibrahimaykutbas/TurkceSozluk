import React from 'react';
import {View} from 'react-native';

import styles from './LoaderText.style';

const LoaderText = ({...props}) => {
  return <View style={[styles.container, {...props}]} />;
};

export default LoaderText;
