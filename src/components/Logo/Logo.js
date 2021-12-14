import React from 'react';
import {View, ImageBackground} from 'react-native';

import Logo from '../../icons/logo.svg';
import background from '../../assets/background.jpg';

import styles from './Logo.style';

const LogoComponent = () => {
  return (
    <ImageBackground source={background} style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo color="white" />
      </View>
    </ImageBackground>
  );
};

export default LogoComponent;
