import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import colors from '../../utils/color';

import SearchIcon from '../../icons/search.svg';
import HistoryIcon from '../../icons/history.svg';
import FavoriteIcon from '../../icons/bookmark.svg';

function TabBar({state, descriptors, navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 20,
        elevation: 20,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        return label === 'Search' ? (
          <View
            style={{
              backgroundColor: 'white',
              padding: 15,
              marginTop: -15,
              borderRadius: 9999,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={onPress}
              style={{
                backgroundColor: colors.red,
                width: 56,
                height: 56,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 9999,
              }}>
              <SearchIcon color="white" />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            onPress={onPress}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {label === 'History' && (
              <HistoryIcon color={isFocused ? colors.red : colors.textLight} />
            )}
            {label === 'Favorite' && (
              <FavoriteIcon color={isFocused ? colors.red : colors.textLight} />
            )}
            <View
              style={{
                width: 4,
                height: 4,
                backgroundColor: isFocused ? 'red' : 'white',
                borderRadius: 50,
                marginTop: 8,
              }}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default TabBar;
