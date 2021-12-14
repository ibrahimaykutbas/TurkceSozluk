import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './ActionButton.style';

const ActionButton = ({children, disabled, ...props}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.container, {...props}]}>
      {children}
    </TouchableOpacity>
  );
};

export const ActionButtonTitle = ({children, ...props}) => {
  return <Text style={[styles.text, {...props}]}>{children}</Text>;
};

export default ActionButton;
