/* ------------------------------ Basic imports ----------------------------- */
import {Platform, StyleSheet} from 'react-native';
import {globalStyles} from '../../../globalStyles';

/* ---------------------------------- Utils --------------------------------- */
import {dh} from '../../utils/dimensions';

/* -------------------------------- Constants ------------------------------- */
import {COLORS} from './../../constants/_colors';
import {FONTS} from '../../constants/_fonts';

export const styles = StyleSheet.create({
  home: {
    ...globalStyles.container,
  },
  home__content: {
    ...globalStyles.inner,
  },
  home__contentContainer: {
    paddingBottom: Platform.OS === 'android' ? dh(140) : dh(40),
  },
  home__title: {
    ...FONTS.arial.regular14x20,
    color: COLORS.GREY_MEDIUM,
    marginBottom: dh(8),
    marginTop: dh(16),
  },
  home__errorText: {
    textAlign: 'center',
  },
  home__loader: {
    marginTop: dh(24),
  },
});
