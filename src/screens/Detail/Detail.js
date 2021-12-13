import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';

import ActionButton, {
  ActionButtonTitle,
} from '../../components/ActionButton/ActionButton';

import DetailSummaryItem from '../../components/DetailSummaryItem/DetailSummaryItem';
import LoaderText from '../../components/LoaderText/LoaderText';

import FavoriteIcon from '../../icons/favorite.svg';
import FavoriteSolidIcon from '../../icons/favorite-solid.svg';
import HandIcon from '../../icons/hand.svg';
import HandSolidIcon from '../../icons/hand-solid.svg';
import SoundIcon from '../../icons/sound.svg';
import SoundSolidIcon from '../../icons/sound-solid.svg';

import colors from '../../utils/color';

const Detail = ({route}) => {
  const [data, setData] = useState(null);

  const title = route.params?.title;

  const getDetailData = async () => {
    const response = await fetch(`https://sozluk.gov.tr/gts?ara=${title}`);
    const responseData = await response.json();
    setData(responseData[0]);
  };

  useEffect(() => {
    getDetailData();
  }, []);

  return (
    <ScrollView style={{flex: 1, backgroundColor: colors.softRed}}>
      <View style={{padding: 16}}>
        <View>
          <Text
            style={{color: colors.textDark, fontSize: 32, fontWeight: 'bold'}}>
            {title}
          </Text>
          {data?.telaffuz || data?.lisan ? (
            <Text
              style={{
                color: colors.textLight,
                marginTop: 6,
                fontStyle: 'italic',
              }}>
              {data?.telaffuz && data?.telaffuz}
              {data?.lisan}
            </Text>
          ) : null}
        </View>
        <View style={{flexDirection: 'row', marginTop: 24}}>
          <ActionButton disabled={!data}>
            <SoundIcon color={colors.textLight} />
          </ActionButton>
          <ActionButton disabled={!data} marginLeft={12}>
            <FavoriteIcon color={colors.textLight} />
          </ActionButton>
          <ActionButton disabled={!data} marginLeft="auto">
            <HandIcon color={colors.textLight} />
            <ActionButtonTitle>Türk İşaret Dili</ActionButtonTitle>
          </ActionButton>
        </View>
        <View style={{marginTop: 32}}>
          {data
            ? data.anlamlarListe.map(item => (
                <DetailSummaryItem
                  key={item.anlam_sirasi}
                  data={item}
                  border={item.anlam_sira !== '1'}
                />
              ))
            : [1, 2, 3].map(index => (
                <DetailSummaryItem key={index} border={index !== 1}>
                  <LoaderText />
                  <LoaderText width={200} marginTop={10} />
                </DetailSummaryItem>
              ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Detail;
