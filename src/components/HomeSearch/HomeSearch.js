import React, {useState, useEffect} from 'react';
import {View, Text, Animated, TouchableOpacity, Keyboard} from 'react-native';

import LogoComponent from '../Logo/Logo';
import Input from '../Input/Input';

import colors from '../../utils/color';

import styles from './HomeSearch.style';

const HomeSearch = ({isSearchFocus, onSearchFocus}) => {
  const [search, setSearch] = useState(null);

  const [bgOpacity] = useState(new Animated.Value(1));
  const [heroHeight] = useState(new Animated.Value(225));

  useEffect(() => {
    if (isSearchFocus) {
      Animated.timing(bgOpacity, {
        toValue: 0,
        duration: 250,
      }).start();

      Animated.timing(heroHeight, {
        toValue: 84,
        duration: 250,
      }).start();
    } else {
      Animated.timing(bgOpacity, {
        toValue: 1,
        duration: 250,
      }).start();

      Animated.timing(heroHeight, {
        toValue: 225,
        duration: 250,
      }).start();
    }
  }, [bgOpacity, heroHeight, isSearchFocus]);

  const onCancel = () => {
    onSearchFocus(false);
    Keyboard.dismiss();
    setSearch('');
  };

  return (
    <Animated.View style={[styles.container, {height: heroHeight}]}>
      <Animated.View style={{opacity: bgOpacity}}>
        <LogoComponent />
      </Animated.View>
      <View
        style={[
          styles.search,
          {
            bottom: isSearchFocus ? 0 : -20,
            paddingBottom: isSearchFocus ? 10 : 0,
          },
        ]}>
        <Input
          title="Türkçe Sözlük'te Ara"
          value={search}
          onChangeText={setSearch}
          onChangeFocus={status => onSearchFocus(status)}
          clearValue={() => setSearch('')}
        />
        {isSearchFocus && (
          <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
            <Text style={styles.cancelText}>Vazgeç</Text>
          </TouchableOpacity>
        )}
      </View>
    </Animated.View>
  );
};

export default HomeSearch;
