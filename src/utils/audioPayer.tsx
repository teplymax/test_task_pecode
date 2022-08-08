import React, {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import SoundPlayer from 'react-native-sound-player';

type PlayerContextType = {
  play: (url: string) => () => void;
  loadingUrls: Array<string>;
};

export const PlayerContext = createContext<PlayerContextType | null>(null);

export const PlayerProvider: FC<{children: ReactNode}> = ({children}) => {
  const [loadingUrls, setLoadingUrls] = useState<Array<string>>([]);

  const handlePlay = useCallback(
    (url: string) => () => {
      try {
        setLoadingUrls(prev => [...prev, url]);

        if (url) SoundPlayer.loadUrl(url);
        else throw new Error('Invalid url');
      } catch (e) {
        setLoadingUrls(prev => prev.filter(item => item !== url));

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
      ({success, url}) => {
        //?To fix delay issue between finish loading and start playing(library issue)
        setTimeout(() => {
          setLoadingUrls(prev => prev.filter(item => item !== url));

          SoundPlayer.play();
        }, 2000);
      },
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
        loadingUrls,
      }}>
      {children}
    </PlayerContext.Provider>
  );
};
