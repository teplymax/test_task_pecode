import {BSON} from 'realm';

export type SegmentDto = {
  _id: BSON.ObjectId;
  id?: number;
  levels?: {
    _id: BSON.ObjectId;
    level_hsk: string;
    level_hsk3: string;
  };
  word: string;
  pos: string;
  anchor: boolean;
};

export type SentenceDto = {
  _id: BSON.ObjectId;
  id: number;
  simp: string;
  trans: string;
  voice: string;
  pinyin?: string;
  segments: Array<SegmentDto>;
};

export type TopicRespDto = {
  _id: BSON.ObjectId;
  id: number;
  name: string;
  sentences: Array<SentenceDto>;
};

export type WordRespDto = {
  _id: BSON.ObjectId;
  id: number;
  voice: string;
  male_voice: string;
  level_hsk3: string;
  level_hsk: string;
  simp: string;
  trad: string;
  pinyin: string;
  pos: string;
  normalized_pinyin: string;
  english: string;
};
