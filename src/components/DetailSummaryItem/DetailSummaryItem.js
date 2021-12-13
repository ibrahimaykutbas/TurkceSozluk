import React from 'react';
import {View, Text} from 'react-native';

import colors from '../../utils/color';

const DetailSummaryItem = ({children, data, border, ...props}) => {
  const type = (data?.ozelliklerListe &&
    data.ozelliklerListe.map(_ => _.tam_adi)) || ['isim'];

  return (
    <View
      style={{
        position: 'relative',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 26,
        ...props,
      }}>
      {border && (
        <View
          style={{
            height: 1,
            backgroundColor: colors.light,
            position: 'absolute',
            top: 0,
            left: 12,
            right: 12,
          }}
        />
      )}

      {/* Body */}
      {data ? (
        <>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: colors.textLight,
                marginLeft: -14,
                marginRight: 8,
              }}>
              {data.anlam_sira}
            </Text>
            <Text
              style={{
                color: colors.red,
                fontSize: 14,
                fontWeight: '500',
                fontStyle: 'italic',
              }}>
              {type.join(', ')}
            </Text>
          </View>

          <Text
            style={{
              color: colors.textDark,
              fontSize: 14,
              fontWeight: 'bold',
              marginTop: 5,
            }}>
            {data.anlam}
          </Text>

          {data.orneklerListe &&
            data.orneklerListe.map(item => (
              <>
                <Text
                  key={item.ornek_id}
                  style={{
                    color: colors.textLight,
                    fontSize: 14,
                    fontWeight: '500',
                    marginTop: 12,
                    marginLeft: 10,
                  }}>
                  {item.ornek}{' '}
                  <Text
                    style={{
                      color: colors.textLight,
                      fontWeight: 'bold',
                    }}>
                    {item.yazar_id !== '0' && `- ${item.yazar[0].tam_adi}`}
                  </Text>
                </Text>
              </>
            ))}
        </>
      ) : (
        children
      )}
    </View>
  );
};

export default DetailSummaryItem;
