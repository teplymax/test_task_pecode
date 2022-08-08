/* ------------------------------ Basic imports ----------------------------- */
import {StyleSheet} from 'react-native';
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
  home__title: {
    ...FONTS.arial.regular14x20,
    color: COLORS.GREY_MEDIUM,
    marginBottom: dh(8),
    marginTop: dh(16),
  },
  home__loader: {
    marginTop: dh(24),
  },
});
