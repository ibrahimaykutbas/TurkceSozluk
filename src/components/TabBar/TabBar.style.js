import {StyleSheet} from 'react-native';

import colors from '../../utils/color';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 20,
  },
  searchContainer: {
    backgroundColor: 'white',
    padding: 15,
    marginTop: -15,
    borderRadius: 9999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBotton: {
    backgroundColor: colors.red,
    width: 56,
    height: 56,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9999,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeButton: {
    width: 4,
    height: 4,
    borderRadius: 50,
    marginTop: 8,
  },
});
