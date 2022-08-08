/* ------------------------------ Basic imports ----------------------------- */
import {FC} from 'react';
import {ViewStyle} from 'react-native';

export type HintType = FC<{
  customContainerStyles?: ViewStyle | Array<ViewStyle>;
}>;
