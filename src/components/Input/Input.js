import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, Keyboard} from 'react-native';

import SearchIcon from '../../icons/search.svg';
import CloseIcon from '../../icons/close.svg';

import colors from '../../utils/color';

import styles from './Input.style';

const Input = ({title, value, onChangeText, onChangeFocus, clearValue}) => {
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    onChangeFocus(isFocused);
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <View style={[styles.input]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <SearchIcon
            style={{paddingHorizontal: 20}}
            color={colors.textMedium}
          />
          <TextInput
            placeholder={title}
            value={value}
            onChangeText={onChangeText}
            color={colors.textDark}
            placeholderTextColor={colors.textMedium}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </View>
        <CloseIcon
          style={{paddingHorizontal: 20}}
          color={value ? colors.textMedium : 'white'}
          onPress={value && clearValue}
        />
      </View>
    </View>
  );
};

export default Input;
