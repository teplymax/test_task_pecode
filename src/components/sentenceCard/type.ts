/* ------------------------------ Basic imports ----------------------------- */
import {FC} from 'react';
import {ViewStyle} from 'react-native';

/* ---------------------------------- Types --------------------------------- */
import {SentenceDto} from '../../types/api';

export type SentenceCardType = FC<{
  containerStyles?: ViewStyle | Array<ViewStyle>;
  data?: SentenceDto;
  selectedWord: false | number;
  onWordPress: (index: number, id?: number) => void;
}>;
