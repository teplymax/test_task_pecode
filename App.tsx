/* ------------------------------ Basic imports ----------------------------- */
import React, {FC} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

/* ---------------------------------- Pages --------------------------------- */
import Home from './src/pages/home';

/* ---------------------------------- Utils --------------------------------- */
import {PlayerProvider} from './src/utils/audioPayer';

const App: FC = () => {
  /* --------------------------------- Render --------------------------------- */

  return (
    <SafeAreaProvider>
      <PlayerProvider>
        <Home />
      </PlayerProvider>
    </SafeAreaProvider>
  );
};

export default App;
