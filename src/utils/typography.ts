/* ------------------------------ Basic import ------------------------------ */
import {TextStyle} from 'react-native';

/* ---------------------------------- Utils --------------------------------- */
import {dw} from './dimensions';

type FontFamilies =
  | 'SFProText-Regular'
  | 'SFProText-Medium'
  | 'SFProText-Bold'
  | 'ArialMT'
  | 'Arial-BoldMT'
  | 'Biryani-Semibold'
  | 'Biryani-Regular'
  | 'FZKTK--GBK1-0'
  | 'PingFangSc-Regular';

export const getTextStyle = (
  size: number,
  lineHeight: number,
  fontFamily: FontFamilies = 'SFProText-Regular',
) =>
  <TextStyle>{
    fontSize: dw(size),
    fontFamily,
    lineHeight: dw(lineHeight),
  };
