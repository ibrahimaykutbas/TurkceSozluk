import React from 'react';
import {FlatList, Text} from 'react-native';

import {
  SimpleCardContainer,
  SimpleCardTitle,
} from '../../components/SimpleCard/SimpleCard';

import colors from '../../utils/color';

const SearchHistoryList = ({data}) => {
  return (
    <FlatList
      style={{
        marginVertical: 12,
        paddingHorizontal: 16,
      }}
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <SimpleCardContainer>
          <SimpleCardTitle>{item.title}</SimpleCardTitle>
        </SimpleCardContainer>
      )}
      ListHeaderComponent={
        <Text
          style={{
            color: colors.textLight,
            marginBottom: 10,
          }}>
          Son Aramalar
        </Text>
      }
      showsVerticalScrollIndicator={false}
    />
  );
};

export default SearchHistoryList;
