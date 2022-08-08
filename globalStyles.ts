/*Iphone 11pro bottom and top offset:
 top=44px;bottom=34px*/

/* ------------------------------ Basic imports ----------------------------- */
import {StyleSheet} from 'react-native';

/* -------------------------------- Constants ------------------------------- */
import {COLORS} from './src/constants/_colors';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.MAIN_BG,
    alignItems: 'center',
  },
  inner: {
    flex: 1,
    width: '91%',
  },
  alignedRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  alignedColumn: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  centerContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
