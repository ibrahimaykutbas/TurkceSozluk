import React from 'react';
import {View, ImageBackground} from 'react-native';

import Logo from '../../icons/logo.svg';
import background from '../../assets/background.jpg';

const LogoComponent = () => {
  return (
    <ImageBackground
      source={background}
      style={{
        width: '100%',
        height: '100%',
      }}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Logo color="white" />
      </View>
    </ImageBackground>
  );
};

export default LogoComponent;
