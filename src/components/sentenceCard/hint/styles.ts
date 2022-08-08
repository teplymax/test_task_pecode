/* ------------------------------ Basic imports ----------------------------- */
import {StyleSheet} from 'react-native';

/* ---------------------------------- Utils --------------------------------- */
import {dw} from '../../../utils/dimensions';
import {generateHitSlop} from '../../../utils/hitSlop';

/* -------------------------------- Constants ------------------------------- */
import {COLORS} from '../../../constants/_colors';
import {FONTS} from '../../../constants/_fonts';

export const hitSlop = {
  hintBtn: generateHitSlop(),
};

export const styles = StyleSheet.create({
  hint: {
    color: COLORS.LIGHT_GREY,
  },
  hint__triangle: {
    color: COLORS.DARK_BLUE,
    position: 'absolute',
    bottom: dw(-20),
    left: '50%',
    transform: [{translateX: -dw(12)}],
  },
  hint__container: {
    position: 'absolute',
    right: -dw(10),
    width: dw(285),
    borderRadius: dw(12),
    backgroundColor: COLORS.DARK_BLUE,
    paddingHorizontal: dw(24),
    paddingBottom: dw(24),
    paddingTop: dw(16),
  },
  hint__title: {
    ...FONTS.sfPro.bold14x16,
    color: COLORS.WHITE,
    textAlign: 'center',
    opacity: 0.65,
    marginBottom: dw(16),
    letterSpacing: dw(0.76),
  },
  hint__description: {
    ...FONTS.biryani.regular14x20,
    color: COLORS.WHITE,
  },
  hint__info_show: {
    zIndex: 1,
    elevation: 1,
  },
  hint__info_hide: {
    zIndex: -10,
    elevation: -10,
  },
});
