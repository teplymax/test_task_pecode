/* ------------------------------ Basic imports ----------------------------- */
import {Insets} from 'react-native';

/* ---------------------------------- Utils --------------------------------- */
import {dw} from './dimensions';

export const generateHitSlop = (value: number | Insets = dw(20)): Insets => {
  if (typeof value === 'number')
    return {
      top: value,
      bottom: value,
      left: value,
      right: value,
    };
  else return value;
};
