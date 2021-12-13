import {StyleSheet} from 'react-native';

import color from '../../utils/color';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 52,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 8,
    justifyContent: 'space-between',
    elevation: 10,
  },
});
