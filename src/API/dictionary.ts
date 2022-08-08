/* -------------------------------- Libraries ------------------------------- */
import {AxiosResponse} from 'axios';
import {BSON} from 'realm';

/* ---------------------------------- Types --------------------------------- */
import {TopicRespDto, WordRespDto} from '../types/api';

/* ---------------------------------- Utils --------------------------------- */
import MainAxios from '../utils/axios';

/* ---------------------------- Get topic request --------------------------- */

export const getTopic = async () => {
  const resp: AxiosResponse<TopicRespDto> = await MainAxios.get(
    'grammars/grammar/20',
  );

  const {data} = resp;

  return {
    _id: new BSON.ObjectID(),
    id: data.id,
    name: data.name,
    sentences: data.sentences.map(sentence => ({
      ...sentence,
      _id: new BSON.ObjectID(),
      segments: sentence.segments.map(segment => ({
        ...segment,
        _id: new BSON.ObjectID(),
        levels: segment.levels
          ? {
              ...segment.levels,
              _id: new BSON.ObjectID(),
            }
          : null,
      })),
    })),
  } as TopicRespDto;
};

/* ---------------------------- Get words request --------------------------- */

export const getWords = async (ids: Array<number>) => {
  const resp: AxiosResponse<Array<WordRespDto>> = await MainAxios.post(
    'dictionaries/dictionaries/bulk',
    {
      ids,
    },
  );
  return resp.data.map(item => ({
    _id: new BSON.ObjectID(),
    id: item.id,
    voice: item.voice,
    male_voice: item.male_voice,
    level_hsk3: item.level_hsk3,
    level_hsk: item.level_hsk,
    simp: item.simp,
    trad: item.trad,
    pinyin: item.pinyin,
    pos: item.pos,
    normalized_pinyin: item.normalized_pinyin,
    english: item.english,
  })) as Array<WordRespDto>;
};
