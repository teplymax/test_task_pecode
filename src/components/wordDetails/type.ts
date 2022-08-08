/* ------------------------------ Basic imports ----------------------------- */
import {FC} from 'react';
import {SwipeablePanelProps} from 'rn-swipeable-panel/dist/Panel';

export type WordDetailsType = FC<
  SwipeablePanelProps & {
    wordId?: number;
  }
>;
