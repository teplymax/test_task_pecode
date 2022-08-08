/* ------------------------------ Basic imports ----------------------------- */
import {StyleSheet} from 'react-native';
import {globalStyles} from '../../../globalStyles';

/* ---------------------------------- Utils --------------------------------- */
import {dw} from '../../utils/dimensions';

/* -------------------------------- Constants ------------------------------- */
import {COLORS} from '../../constants/_colors';
import {FONTS} from '../../constants/_fonts';

export const styles = StyleSheet.create({
  button: {
    ...globalStyles.centerContent,
    height: dw(32),
    backgroundColor: COLORS.LIGHT_BLUE,
    borderRadius: dw(16),
  },
  button_disabled: {
    backgroundColor: COLORS.WHITE_SMOKE,
  },
  button__text: {
    ...FONTS.sfPro.bold12x14,
    color: COLORS.WHITE,
  },
});
