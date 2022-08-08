/* ------------------------------ Basic imports ----------------------------- */
import {FC} from 'react';
import {ViewStyle, TextStyle} from 'react-native';

/* -------------------------------- Libraries ------------------------------- */
import {XmlProps} from 'react-native-svg';

export type HeaderType = FC<{
  title?: string;
  leftIcon?: string;
  containerStyles?: ViewStyle | Array<ViewStyle>;
  leftBtnStyles?: ViewStyle | Array<ViewStyle>;
  leftIconStyles?: ViewStyle | Array<ViewStyle>;
  titleStyles?: TextStyle | Array<TextStyle>;
  leftIconProps?: Omit<XmlProps, 'xml' | 'style'>;
  onLeftIconPress?: () => void;
}>;
