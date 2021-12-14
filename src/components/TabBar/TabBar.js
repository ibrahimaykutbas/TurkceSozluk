import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import colors from '../../utils/color';

import SearchIcon from '../../icons/search.svg';
import HistoryIcon from '../../icons/history.svg';
import FavoriteIcon from '../../icons/bookmark.svg';

import styles from './TabBar.style';

function TabBar({state, descriptors, navigation}) {
  return (
    <View style={styles.container}>
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
          <View style={styles.searchContainer}>
            <TouchableOpacity onPress={onPress} style={styles.searchBotton}>
              <SearchIcon color="white" />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={onPress} style={styles.button}>
            {label === 'History' && (
              <HistoryIcon color={isFocused ? colors.red : colors.textLight} />
            )}
            {label === 'Favorite' && (
              <FavoriteIcon color={isFocused ? colors.red : colors.textLight} />
            )}
            <View
              style={[
                styles.activeButton,
                {
                  backgroundColor: isFocused ? 'red' : 'white',
                },
              ]}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default TabBar;
