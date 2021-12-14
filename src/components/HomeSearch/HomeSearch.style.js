import {StyleSheet} from 'react-native';

import colors from '../../utils/color';

export default StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 1,
  },
  search: {
    flexDirection: 'row',
    position: 'absolute',
  },
  cancelButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  cancelText: {
    color: colors.textDark,
  },
});
