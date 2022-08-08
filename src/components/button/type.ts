/* ------------------------------ Basic imports ----------------------------- */
import {FC} from 'react';
import {TouchableOpacityProps, ViewStyle, TextStyle} from 'react-native';

export type ButtonType = FC<
  Omit<TouchableOpacityProps, 'style'> & {
    text?: string;
    containerStyles?: ViewStyle | Array<ViewStyle>;
    textStyles?: TextStyle | Array<TextStyle>;
  }
>;
