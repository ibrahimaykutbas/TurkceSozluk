import {StyleSheet} from 'react-native';

import colors from '../../utils/color';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 16,
    marginBottom: 10,
  },
  border: {
    borderLeftWidth: 3,
    borderLeftColor: colors.light,
    paddingLeft: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textMedium,
  },
  summary: {
    fontSize: 14,
    color: colors.textMedium,
    marginTop: 8,
  },
});
