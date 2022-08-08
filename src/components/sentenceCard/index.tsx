/* ------------------------------ Basic imports ----------------------------- */
import React, {useCallback, useContext, useMemo} from 'react';
import {Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import {styles} from './styles';

/* -------------------------------- Libraries ------------------------------- */
import {SvgXml} from 'react-native-svg';

/* ---------------------------------- Types --------------------------------- */
import {SentenceCardType} from './type';

/* ---------------------------------- Utils --------------------------------- */
import {dw} from '../../utils/dimensions';
import {PlayerContext} from '../../utils/audioPayer';

/* -------------------------------- Constants ------------------------------- */
import {ICONS} from '../../constants/_icons';

/* ------------------------------- Components ------------------------------- */
import Word from './word';
import Hint from './hint';

/* ---------------------------------- Types --------------------------------- */
import {SegmentDto} from '../../types/api';

const SentenceCard: SentenceCardType = ({
  data,
  containerStyles,
  selectedWord,
  onWordPress,
}) => {
  /* ---------------------------------- hooks --------------------------------- */

  const {play} = useContext(PlayerContext) || {};

  const keyWords = useMemo(() => {
    const wordsString =
      data?.segments?.reduce(
        (accumulator: string, currentValue: SegmentDto) => {
          if (currentValue.anchor) return accumulator + currentValue.word + '/';
          else return accumulator;
        },
        '',
      ) || '';
    return wordsString.slice(0, wordsString.length - 1);
  }, [data]);

  /* -------------------------------- Handlers -------------------------------- */

  const handleWordPress = useCallback(
    (index: number, id?: number) => () => onWordPress(index, id),
    [data],
  );

  /* --------------------------------- Render --------------------------------- */

  return (
    <View style={[styles.sentenceCard, containerStyles]}>
      <View style={styles.sentenceCard__originalSentence}>
        <TouchableOpacity
          onPress={play?.(data?.voice as string)}
          style={styles.sentenceCard__soundBtn}>
          <SvgXml
            width={dw(20)}
            height={dw(20)}
            xml={ICONS.soundIcon}
            style={styles.sentenceCard__soundIcon as ViewStyle}
          />
        </TouchableOpacity>

        {data?.segments?.map((item, index) => (
          <Word
            key={index}
            selected={selectedWord === index}
            data={item}
            disabled={!item.levels || !item.id}
            containerStyles={styles.sentenceCard__word}
            onPress={handleWordPress(index, item?.id)}
          />
        ))}
      </View>

      <View style={styles.sentenceCard__englishsentence}>
        <Text style={styles.sentenceCard__text}>{data?.trans}</Text>
      </View>

      <View style={styles.sentenceCard__keyWordsContainer}>
        <SvgXml
          width={dw(10)}
          height={dw(10)}
          xml={ICONS.anchorIcon}
          style={styles.sentenceCard__anchorIcon as ViewStyle}
        />
        <Text
          style={[
            styles.sentenceCard__text,
            styles.sentenceCard__keywordsExplanation,
          ]}>
          Key Words :
        </Text>
        <Text style={[styles.sentenceCard__text]}>{keyWords}</Text>

        <Hint customContainerStyles={styles.sentenceCard__hint} />
      </View>
    </View>
  );
};

export default SentenceCard;
