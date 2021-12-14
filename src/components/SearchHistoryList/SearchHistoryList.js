import React from 'react';
import {FlatList, Text} from 'react-native';

import {
  SimpleCardContainer,
  SimpleCardTitle,
} from '../../components/SimpleCard/SimpleCard';

import styles from './SearchHistoryList.style';

const SearchHistoryList = ({data}) => {
  return (
    <FlatList
      style={styles.container}
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <SimpleCardContainer>
          <SimpleCardTitle>{item.title}</SimpleCardTitle>
        </SimpleCardContainer>
      )}
      ListHeaderComponent={<Text style={styles.text}>Son Aramalar</Text>}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default SearchHistoryList;
