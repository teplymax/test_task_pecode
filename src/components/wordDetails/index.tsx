/* ------------------------------ Basic imports ----------------------------- */
import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {hitSlop, styles} from './styles';

/* -------------------------------- Libraries ------------------------------- */
import {SvgXml} from 'react-native-svg';
import {SwipeablePanel} from 'rn-swipeable-panel';
import SoundPlayer from 'react-native-sound-player';

/* ---------------------------------- Types --------------------------------- */
import {WordDetailsType} from './type';

/* -------------------------------- Constants ------------------------------- */
import {ICONS} from '../../constants/_icons';
import {COLORS} from '../../constants/_colors';

/* ------------------------------- Components ------------------------------- */
import Button from '../button';

/* ---------------------------------- Types --------------------------------- */
import {WordRespDto} from '../../types/api';

/* ---------------------------------- APIs ---------------------------------- */
import {getWords} from '../../API/dictionary';

/* ---------------------------------- Utils --------------------------------- */
import Realm from '../../utils/realmDB';
import {DB_SCHEMAS} from '../../utils/realmDB/realmSchemas';

const WordDetails: WordDetailsType = ({wordId, ...props}) => {
  /* ---------------------------------- Hooks --------------------------------- */

  const [data, setData] = useState<WordRespDto | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  /* -------------------------------- Handlers -------------------------------- */

  const handleGetData = useCallback(async () => {
    setLoading(true);

    const wordData = Realm.objects<WordRespDto>(DB_SCHEMAS.word.name).filtered(
      `id = '${wordId}'`,
    );

    console.log(wordData);

    if (!wordData.length) {
      const data = await getWords([wordId as number]);

      setData(data[0]);

      Realm.write(() => {
        Realm.create(DB_SCHEMAS.word.name, data[0]);
      });

      setData(data[0]);
    } else {
      setData(wordData[0]);
    }

    setLoading(false);
  }, [wordId]);

  const handlePlay = useCallback(() => {
    try {
      if (data?.voice) SoundPlayer.playUrl(data?.voice);
      else throw new Error('Invalid url');
    } catch (e) {
      console.log(`Cannot play the sound file`, e);
    }
  }, [data]);

  useEffect(() => {
    if (typeof wordId === 'number') handleGetData();
  }, [wordId]);

  /* --------------------------------- Render --------------------------------- */

  return (
    //@ts-ignore
    <SwipeablePanel {...props} closeOnTouchOutside style={styles.wordDetails}>
      <View style={styles.wordDetails__header}>
        <Text style={styles.wordDetails__title}>Vocabulary</Text>

        <TouchableOpacity
          hitSlop={hitSlop.closeBtn}
          onPress={props.onClose}
          style={styles.wordDetails__closeBtn}>
          <SvgXml
            xml={ICONS.closeIcom}
            style={styles.wordDetails__closeIcon as ViewStyle}
          />
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator color={COLORS.LIGHT_BLUE} />
      ) : (
        <>
          <View style={styles.wordDetails__wordContainer}>
            <Text style={styles.wordDetails__word}>{data?.simp}</Text>

            <View style={styles.wordDetails__buttons}>
              <Button containerStyles={styles.wordDetails__bookmarkBtn}>
                <SvgXml
                  xml={ICONS.bookmarkIcon}
                  style={styles.wordDetails__bookmarkIcon as ViewStyle}
                />
              </Button>
              <Button
                text="More"
                containerStyles={styles.wordDetails__moreBtn}
              />
            </View>
          </View>

          <TouchableOpacity
            onPress={handlePlay}
            style={styles.wordDetails__audio}>
            <SvgXml
              xml={ICONS.soundIcon}
              style={styles.wordDetails__audioIcon as ViewStyle}
            />
            <Text style={styles.wordDetails__audioText}>{data?.pinyin}</Text>
          </TouchableOpacity>

          <View style={styles.wordDetails__info}>
            <View style={styles.wordDetails__lvlContainer}>
              <Text style={styles.wordDetails__lvlText}>
                lvl {data?.level_hsk || 0}
              </Text>
            </View>
            <Text style={styles.wordDetails__infoText}>{data?.pos}</Text>
            <View style={styles.wordDetails__symbolContainer}>
              <Text style={styles.wordDetails__symbolText}>繁</Text>
            </View>
            <Text style={styles.wordDetails__wordSymbol}>{data?.trad}</Text>
          </View>

          <Text style={styles.wordDetails__translation}>{data?.english}</Text>
        </>
      )}
    </SwipeablePanel>
  );
};

export default WordDetails;
