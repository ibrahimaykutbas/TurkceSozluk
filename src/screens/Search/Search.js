import React, {useState, useEffect, useCallback} from 'react';
import {View, StatusBar} from 'react-native';

import SafeAreaView from 'react-native-safe-area-view';
import {useFocusEffect} from '@react-navigation/native';

import SuggestionCard from '../../components/SuggestionCard/SuggestionCard';
import SearchHistoryList from '../../components/SearchHistoryList/SearchHistoryList';
import HomeSearch from '../../components/HomeSearch/HomeSearch';

import colors from '../../utils/color';

const Data = [{id: 1, title: 'Kalem', summary: 'Summary First Item'}];

const Search = ({navigation}) => {
  const [isSearchFocus, setSearchFocus] = useState(false);

  const [homeData, setHomeData] = useState(null);

  const getHomeData = async () => {
    const response = await fetch('https://sozluk.gov.tr/icerik');
    const data = await response.json();
    setHomeData(data);
  };

  useEffect(() => {
    getHomeData();
  }, []);

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBackgroundColor('black');
    }, []),
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: isSearchFocus ? colors.softRed : colors.red,
      }}>
      {/* Header */}
      <HomeSearch
        isSearchFocus={isSearchFocus}
        onSearchFocus={setSearchFocus}
      />

      {/* Content */}
      <View
        style={{
          flex: 1,
          backgroundColor: colors.softRed,
          paddingTop: isSearchFocus ? 0 : 20,
        }}>
        {isSearchFocus ? (
          <View style={{flex: 1}}>
            <SearchHistoryList data={Data} />
          </View>
        ) : (
          <View style={{flex: 1, paddingHorizontal: 16, paddingVertical: 40}}>
            <SuggestionCard
              data={homeData?.kelime[0]}
              title="Bir Kelime"
              onPress={() =>
                navigation.navigate('Detail', {
                  title: homeData?.kelime[0].madde,
                })
              }
            />

            <SuggestionCard
              data={homeData?.atasoz[0]}
              title="Bir Deyim - Atasözü"
              onPress={() =>
                navigation.navigate('Detail', {
                  title: homeData?.atasoz[0].madde,
                })
              }
              style={{
                marginTop: 20,
                marginBottom: 10,
              }}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Search;
