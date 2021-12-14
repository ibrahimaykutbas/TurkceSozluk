import {StyleSheet} from 'react-native';

import colors from '../../utils/color';

export default StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 26,
  },
  border: {
    height: 1,
    backgroundColor: colors.light,
    position: 'absolute',
    top: 0,
    left: 12,
    right: 12,
  },
  number: {
    color: colors.textLight,
    marginLeft: -14,
    marginRight: 8,
  },
  type: {
    color: colors.red,
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'italic',
  },
  title: {
    color: colors.textDark,
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  example: {
    color: colors.textLight,
    fontSize: 14,
    fontWeight: '500',
    marginTop: 12,
    marginLeft: 10,
  },
  author: {
    color: colors.textLight,
    fontWeight: 'bold',
  },
});
