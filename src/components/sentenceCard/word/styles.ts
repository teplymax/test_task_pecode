/* ------------------------------ Basic imports ----------------------------- */
import {StyleSheet} from 'react-native';
import {globalStyles} from '../../../../globalStyles';

/* ---------------------------------- Utils --------------------------------- */
import {dw} from '../../../utils/dimensions';

/* -------------------------------- Constants ------------------------------- */
import {COLORS} from '../../../constants/_colors';
import {FONTS} from '../../../constants/_fonts';

export const styles = StyleSheet.create({
  word: {
    ...globalStyles.centerContent,
  },
  word__anchor: {
    color: COLORS.LIGHT_BLUE,
    marginBottom: dw(3),
  },
  word__textContainer: {
    padding: dw(8),
    borderRadius: dw(8),
    borderColor: 'transparent',
    borderWidth: dw(1),
  },
  word__textContainer_selected: {
    borderColor: COLORS.LIGHT_BLUE,
  },
  word__text: {
    ...FONTS.pingFang.regular20x24,
    color: COLORS.DARK_GREY,
  },
  word__text_disabled: {
    color: COLORS.WHITE_SMOKE,
  },
});
