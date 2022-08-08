/* ------------------------------ Basic imports ----------------------------- */
import React, {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useEffect,
} from 'react';

/* -------------------------------- Libraries ------------------------------- */
import SoundPlayer from 'react-native-sound-player';

type PlayerContextType = {
  play: (url: string) => () => void;
};

export const PlayerContext = createContext<PlayerContextType | null>(null);

export const PlayerProvider: FC<{children: ReactNode}> = ({children}) => {
  const handlePlay = useCallback(
    (url: string) => () => {
      try {
        if (url) SoundPlayer.playUrl(url);
        else throw new Error('Invalid url');
      } catch (e) {
        console.log(`Cannot play the sound file`, e);
      }
    },
    [],
  );

  useEffect(() => {
    const _onFinishedPlayingSubscription = SoundPlayer.addEventListener(
      'FinishedPlaying',
      ({success}) => {},
    );

    const _onFinishedLoadingURLSubscription = SoundPlayer.addEventListener(
      'FinishedLoadingURL',
      ({success, url}) => {},
    );

    return () => {
      _onFinishedPlayingSubscription.remove();
      _onFinishedLoadingURLSubscription.remove();
    };
  }, []);

  return (
    <PlayerContext.Provider
      value={{
        play: handlePlay,
      }}>
      {children}
    </PlayerContext.Provider>
  );
};
