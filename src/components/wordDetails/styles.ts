/* ------------------------------ Basic imports ----------------------------- */
import {StyleSheet} from 'react-native';
import {globalStyles} from '../../../globalStyles';

/* ---------------------------------- Utils --------------------------------- */
import {dh, dw} from '../../utils/dimensions';
import {generateHitSlop} from '../../utils/hitSlop';

/* -------------------------------- Constants ------------------------------- */
import {COLORS} from '../../constants/_colors';
import {FONTS} from '../../constants/_fonts';

export const hitSlop = {
  closeBtn: generateHitSlop(),
};

export const styles = StyleSheet.create({
  wordDetails: {
    paddingHorizontal: dw(16),
    borderRadius: dw(4),
  },
  wordDetails__header: {
    ...globalStyles.centerContent,
    flexDirection: 'row',
    paddingBottom: dh(6),
    marginBottom: dh(12),
    borderBottomWidth: dw(1),
    borderColor: COLORS.LIGHT_GREY,
  },
  wordDetails__closeBtn: {
    position: 'absolute',
    top: 0,
    right: dw(10),
  },
  wordDetails__closeIcon: {
    color: COLORS.WHITE_SMOKE,
  },
  wordDetails__title: {
    ...FONTS.arial.bold14x20,
    color: COLORS.DARK_GREY,
  },
  wordDetails__word: {
    ...FONTS.fzkai.regular24x32,
    color: COLORS.DARK_GREY,
  },
  wordDetails__wordContainer: {
    ...globalStyles.alignedRow,
    marginBottom: dh(16),
  },
  wordDetails__buttons: {
    marginLeft: 'auto',
    flexDirection: 'row',
  },
  wordDetails__moreBtn: {
    width: dw(64),
    marginLeft: dw(8),
  },
  wordDetails__bookmarkBtn: {
    maxWidth: dw(32),
    height: dw(32),
    borderRadius: dw(32) / 2,
    backgroundColor: COLORS.LIGHTEST_GREY,
  },
  wordDetails__bookmarkIcon: {
    color: COLORS.YELLOW,
  },
  wordDetails__audio: {
    ...globalStyles.alignedRow,
  },
  wordDetails__audioText: {
    ...FONTS.sfPro.regular16x20,
    color: COLORS.GREY_MEDIUM,
    marginLeft: dw(8),
  },
  wordDetails__audioIcon: {
    color: COLORS.GREY_MEDIUM,
  },
  wordDetails__info: {
    ...globalStyles.alignedRow,
    flexWrap: 'wrap',
    marginVertical: dh(14),
  },
  wordDetails__lvlContainer: {
    borderRadius: dw(8),
    paddingVertical: dw(5),
    paddingHorizontal: dw(8),
    backgroundColor: COLORS.LIME_YELLOW,
    marginRight: dw(8),
  },
  wordDetails__lvlText: {
    ...FONTS.sfPro.bold12x14,
    textTransform: 'uppercase',
    color: COLORS.WHITE,
  },
  wordDetails__infoText: {
    ...FONTS.sfPro.bold16x20,
    color: COLORS.GREY,
  },
  wordDetails__symbolContainer: {
    borderColor: COLORS.WHITE_SMOKE,
    padding: dw(4),
    borderRadius: dw(4),
    borderWidth: dw(1),
    marginHorizontal: dw(8),
  },
  wordDetails__symbolText: {
    ...FONTS.sfPro.medium14x14,
    color: COLORS.WHITE_SMOKE,
  },
  wordDetails__wordSymbol: {
    ...FONTS.sfPro.regular16x24,
    color: COLORS.GREY,
  },
  wordDetails__translation: {
    ...FONTS.biryani.semibold14x24,
    color: COLORS.GREY,
  },
});
