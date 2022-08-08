/* ------------------------------ Basic imports ----------------------------- */
import {StyleSheet} from 'react-native';
import {globalStyles} from '../../../globalStyles';

/* ---------------------------------- Utils --------------------------------- */
import {dw} from '../../utils/dimensions';

/* -------------------------------- Constants ------------------------------- */
import {FONTS} from '../../constants/_fonts';
import {COLORS} from '../../constants/_colors';

export const styles = StyleSheet.create({
  sentenceCard: {
    width: '100%',
    paddingHorizontal: dw(12),
    paddingBottom: dw(24),
    paddingTop: dw(12),
    backgroundColor: COLORS.WHITE,
    borderRadius: dw(10),
  },
  sentenceCard__originalsentence: {
    ...globalStyles.alignedRow,
    flexWrap: 'wrap',
    paddingLeft: dw(26),
  },
  sentenceCard__soundBtn: {
    position: 'absolute',
    top: dw(38),
  },
  sentenceCard__soundIcon: {
    color: COLORS.GREY_MEDIUM,
  },
  sentenceCard__word: {
    marginBottom: dw(32),
  },
  sentenceCard__englishsentence: {
    paddingVertical: dw(14),
    borderColor: COLORS.WHITE_SMOKE,
    borderBottomWidth: dw(1),
    borderTopWidth: dw(1),
    marginTop: dw(4),
    marginBottom: dw(16),
  },
  sentenceCard__text: {
    ...FONTS.arial.regular14x20,
    color: COLORS.GREY_MEDIUM,
  },
  sentenceCard__keyWordsContainer: {
    ...globalStyles.alignedRow,
    width: '100%',
  },
  sentenceCard__anchorIcon: {
    color: COLORS.LIGHT_BLUE,
  },
  sentenceCard__keywordsExplanation: {
    ...FONTS.arial.bold14x20,
    marginHorizontal: dw(10),
  },
});
