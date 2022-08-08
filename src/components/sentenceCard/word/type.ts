/* ------------------------------ Basic imports ----------------------------- */
import {FC} from 'react';
import {TouchableOpacityProps, ViewStyle} from 'react-native';

/* ---------------------------------- Types --------------------------------- */
import {SegmentDto} from '../../../types/api';

export type WordType = FC<
  Omit<TouchableOpacityProps, 'style'> & {
    containerStyles?: ViewStyle | Array<ViewStyle>;
    selected?: boolean;
    data?: SegmentDto;
  }
>;
