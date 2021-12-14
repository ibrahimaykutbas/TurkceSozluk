import React from 'react';
import {View, Text} from 'react-native';

import {CardContainer, CardTitle, CardSummary} from '../Card/Card';
import LoaderText from '../LoaderText/LoaderText';

import styles from './SuggestionCard.style';

const SuggestionCard = ({title, onPress, data, ...props}) => {
  return (
    <View {...props}>
      <Text style={styles.title}>{title}</Text>
      <CardContainer onPress={onPress}>
        {data ? (
          <>
            <CardTitle>{data.madde}</CardTitle>
            <CardSummary>{data.anlam}.</CardSummary>
          </>
        ) : (
          <>
            <LoaderText />
            <LoaderText width={200} marginTop={10} />
          </>
        )}
      </CardContainer>
    </View>
  );
};

export default SuggestionCard;
