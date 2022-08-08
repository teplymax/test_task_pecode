/* ---------------------------------- Utils --------------------------------- */
import {getTextStyle} from '../utils/typography';

export const FONTS = {
  arial: {
    regular14x20: getTextStyle(14, 20, 'ArialMT'),
    bold14x20: getTextStyle(14, 20, 'Arial-BoldMT'),
  },
  biryani: {
    regular14x20: getTextStyle(14, 20, 'Biryani-Regular'),
    semibold14x24: getTextStyle(14, 24, 'Biryani-Semibold'),
  },
  pingFang: {
    regular20x24: getTextStyle(20, 24, 'PingFangSc-Regular'),
  },
  fzkai: {
    regular24x32: getTextStyle(24, 32, 'FZKTK--GBK1-0'),
  },
  sfPro: {
    regular12x12: getTextStyle(12, 12, 'SFProText-Regular'),
    regular12x16: getTextStyle(12, 16, 'SFProText-Regular'),
    regular16x20: getTextStyle(16, 20, 'SFProText-Regular'),
    regular16x24: getTextStyle(16, 24, 'SFProText-Regular'),
    medium14x14: getTextStyle(14, 14, 'SFProText-Medium'),
    bold12x14: getTextStyle(12, 14, 'SFProText-Bold'),
    bold14x16: getTextStyle(14, 16, 'SFProText-Bold'),
    bold16x20: getTextStyle(16, 20, 'SFProText-Bold'),
  },
};
