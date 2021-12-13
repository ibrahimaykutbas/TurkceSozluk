import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import colors from '../../utils/color';

const ActionButton = ({children, disabled, ...props}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={{
        backgroundColor: 'white',
        elevation: 10,
        flexDirection: 'row',
        minWidth: 48,
        minHeight: 48,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 8,
        ...props,
      }}>
      {children}
    </TouchableOpacity>
  );
};

export const ActionButtonTitle = ({children, ...props}) => {
  return (
    <Text
      style={{
        color: colors.textLight,
        fontSize: 14,
        fontWeight: 'bold',
        marginHorizontal: 4,
        ...props,
      }}>
      {children}
    </Text>
  );
};

export default ActionButton;
