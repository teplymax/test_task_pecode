/* ------------------------------ Basic imports ----------------------------- */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

/* -------------------------------- Libraries ------------------------------- */
import {SvgXml} from 'react-native-svg';

/* ---------------------------------- Types --------------------------------- */
import {WordType} from './type';

/* ---------------------------------- Utils --------------------------------- */
import {dw} from '../../../utils/dimensions';

/* -------------------------------- Constants ------------------------------- */
import {ICONS} from '../../../constants/_icons';

const Word: WordType = ({data, containerStyles, selected, ...props}) => {
  /* --------------------------------- Render --------------------------------- */

  return (
    <TouchableOpacity {...props} style={[styles.word, containerStyles]}>
      <SvgXml
        width={dw(10)}
        height={dw(10)}
        xml={ICONS.anchorIcon}
        style={[
          styles.word__anchor,
          {
            opacity: data?.anchor ? 1 : 0,
          },
        ]}
      />

      <View
        style={[
          styles.word__textContainer,
          selected && styles.word__textContainer_selected,
        ]}>
        <Text
          style={[
            styles.word__text,
            props.disabled && styles.word__text_disabled,
          ]}>
          {data?.word}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Word;
