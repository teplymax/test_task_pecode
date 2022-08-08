import 'react-native-get-random-values';
import Realm from 'realm';

import {DB_SCHEMAS} from './realmSchemas';

const realm = new Realm({
  schema: [
    DB_SCHEMAS.topic,
    DB_SCHEMAS.sentence,
    DB_SCHEMAS.segment,
    DB_SCHEMAS.levels,
    DB_SCHEMAS.word,
  ],
});

export default realm;
