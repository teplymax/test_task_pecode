/* ------------------------------ Basic imports ----------------------------- */
import {StyleSheet} from 'react-native';
import {globalStyles} from '../../../globalStyles';

/* ---------------------------------- Utils --------------------------------- */
import {dw} from '../../utils/dimensions';
import {generateHitSlop} from '../../utils/hitSlop';

/* -------------------------------- Constants ------------------------------- */
import {FONTS} from '../../constants/_fonts';
import {COLORS} from './../../constants/_colors';

export const hitSlop = {
  leftBtn: generateHitSlop(),
};

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingHorizontal: dw(36),
  },
  header__container: {
    ...globalStyles.centerContent,
    flex: 1,
  },
  header__title: {
    ...FONTS.sfPro.regular12x16,
    color: COLORS.WHITE,
  },
  header__leftBtn: {
    position: 'absolute',
    left: 0,
  },
  header__icon: {
    color: COLORS.WHITE,
  },
});
