import React from 'react';
import {View, Text} from 'react-native';

import colors from '../../utils/color';

import styles from './DetailSummaryItem.style';

const DetailSummaryItem = ({children, data, border, ...props}) => {
  const type = (data?.ozelliklerListe &&
    data.ozelliklerListe.map(_ => _.tam_adi)) || ['isim'];

  return (
    <View style={[styles.container, {...props}]}>
      {border && <View style={styles.border} />}

      {/* Body */}
      {data ? (
        <>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={styles.number}>{data.anlam_sira}</Text>
            <Text style={styles.type}>{type.join(', ')}</Text>
          </View>

          <Text style={styles.title}>{data.anlam}</Text>

          {data.orneklerListe &&
            data.orneklerListe.map(item => (
              <>
                <Text key={item.ornek_id} style={styles.example}>
                  {item.ornek}{' '}
                  <Text style={styles.author}>
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
