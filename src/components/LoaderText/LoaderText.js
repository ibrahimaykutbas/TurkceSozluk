import React from 'react';
import {View, Text} from 'react-native';

import colors from '../../utils/color';

const LoaderText = ({...props}) => {
  return (
    <View
      style={{
        backgroundColor: colors.light,
        width: 120,
        height: 16,
        ...props,
      }}></View>
  );
};

export default LoaderText;
