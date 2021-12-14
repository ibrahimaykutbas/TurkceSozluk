import {StyleSheet} from 'react-native';

import colors from '../../utils/color';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 16,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textMedium,
  },
});
