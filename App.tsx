/* ------------------------------ Basic imports ----------------------------- */
import React, {FC} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

/* ---------------------------------- Pages --------------------------------- */
import Home from './src/pages/home';

const App: FC = () => {
  /* --------------------------------- Render --------------------------------- */

  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>
  );
};

export default App;
