/* ------------------------------ Basic imports ----------------------------- */
import React, {FC, useCallback, useEffect, useState} from 'react';
import {View, Text, ScrollView, ActivityIndicator} from 'react-native';
import {styles} from './styles';

/* ------------------------------- Components ------------------------------- */
import Header from '../../components/header';
import SentenceCard from '../../components/sentenceCard';
import WordDetails from '../../components/wordDetails';

/* -------------------------------- Constants ------------------------------- */
import {ICONS} from '../../constants/_icons';
import {COLORS} from '../../constants/_colors';

/* ---------------------------------- Utils --------------------------------- */
import {dw} from '../../utils/dimensions';
import {DB_SCHEMAS} from '../../utils/realmDB/realmSchemas';
import Realm from '../../utils/realmDB';

/* ---------------------------------- APIs ---------------------------------- */
import {getTopic} from '../../API/dictionary';

/* ---------------------------------- Types --------------------------------- */
import {TopicRespDto} from '../../types/api';

type SelectedWord = {
  index: number;
  id?: number;
};

const Home: FC = () => {
  /* ---------------------------------- Hooks --------------------------------- */

  const [showWord, setShowWord] = useState<SelectedWord | false>(false);
  const [data, setData] = useState<TopicRespDto | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  /* -------------------------------- Handlers -------------------------------- */

  const handleToggleWord = useCallback(
    (index?: number, id?: number) =>
      setShowWord(typeof index === 'number' ? {index, id} : false),
    [],
  );

  const handleGetData = useCallback(async () => {
    setLoading(true);

    const topics = Realm.objects<TopicRespDto>(DB_SCHEMAS.topic.name);

    if (!topics.length) {
      const data = await getTopic();

      Realm.write(() => {
        Realm.create(DB_SCHEMAS.topic.name, data);
      });

      setData(data);
    } else {
      setData(topics[0]);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    handleGetData();
  }, []);

  /* --------------------------------- Render --------------------------------- */

  return (
    <View style={styles.home}>
      <Header
        title="New Grading Standard"
        leftIcon={ICONS.arrowIcon}
        leftIconProps={{
          width: dw(16),
          height: dw(16),
        }}
      />
      {loading ? (
        <ActivityIndicator
          size="large"
          color={COLORS.LIGHT_BLUE}
          style={styles.home__loader}
        />
      ) : (
        <ScrollView
          style={styles.home__content}
          contentContainerStyle={styles.home__contentContainer}>
          {data ? (
            <>
              <Text style={styles.home__title}>
                Sample sentence of {data?.name}
              </Text>

              <SentenceCard
                selectedWord={showWord ? showWord.index : false}
                data={data?.sentences?.[0]}
                onWordPress={handleToggleWord}
              />
            </>
          ) : (
            <Text style={[styles.home__title, styles.home__errorText]}>
              Error loading data
            </Text>
          )}
        </ScrollView>
      )}

      <WordDetails
        isActive={!!showWord}
        onClose={handleToggleWord}
        fullWidth
        noBackgroundOpacity
        wordId={showWord ? showWord.id : undefined}
      />
    </View>
  );
};

export default Home;
