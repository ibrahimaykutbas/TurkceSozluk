import {StyleSheet} from 'react-native';

import colors from '../../utils/color';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    elevation: 10,
    flexDirection: 'row',
    minWidth: 48,
    minHeight: 48,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  text: {
    color: colors.textLight,
    fontSize: 14,
    fontWeight: 'bold',
    marginHorizontal: 4,
  },
});
