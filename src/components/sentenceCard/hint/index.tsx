/* ------------------------------ Basic imports ----------------------------- */
import React, {useCallback, useRef, useState} from 'react';
import {
  Animated,
  Easing,
  LayoutChangeEvent,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {styles, hitSlop} from './styles';

/* -------------------------------- Libraries ------------------------------- */
import {SvgXml} from 'react-native-svg';

/* -------------------------------- Constants ------------------------------- */
import {ICONS} from '../../../constants/_icons';

/* ---------------------------------- Types --------------------------------- */
import {HintType} from './type';

/* ---------------------------------- Utils --------------------------------- */
import {dw} from '../../../utils/dimensions';

const Hint: HintType = ({customContainerStyles}) => {
  /* ---------------------------------- Hooks --------------------------------- */

  const [infoOffset, setInfoOffset] = useState<number>(0);
  const [showInfo, setShowInfo] = useState<boolean>(false);

  const animatedValue = useRef(new Animated.Value(0)).current;

  /* -------------------------------- Handlers -------------------------------- */

  const handleInfoLayout = useCallback(
    (e: LayoutChangeEvent) =>
      setInfoOffset(e.nativeEvent.layout.height + dw(16)),
    [],
  );

  const handleShowInfo = useCallback(() => {
    setShowInfo(prev => {
      Animated.timing(animatedValue, {
        toValue: !prev ? 1 : 0,
        useNativeDriver: false,
        duration: 400,
        easing: Easing.bezier(0.33, 1, 0.68, 1),
      }).start();

      return !prev;
    });
  }, []);

  /* --------------------------------- Render --------------------------------- */

  return (
    <View style={customContainerStyles}>
      <TouchableOpacity onPress={handleShowInfo} hitSlop={hitSlop.hintBtn}>
        <SvgXml
          width={dw(18)}
          height={dw(18)}
          xml={ICONS.hintIcon}
          style={styles.hint as ViewStyle}
        />
      </TouchableOpacity>

      <Animated.View
        style={[
          showInfo ? styles.hint__info_show : styles.hint__info_hide,
          {transform: [{scale: animatedValue}]},
        ]}>
        <SvgXml
          width={dw(24)}
          height={dw(24)}
          xml={ICONS.triangleIcon}
          style={styles.hint__triangle}
        />
        <View
          style={[
            styles.hint__container,
            {
              bottom: -infoOffset,
            },
          ]}
          onLayout={handleInfoLayout}>
          <Text style={styles.hint__title}>What is Key Words?</Text>
          <Text style={styles.hint__description}>
            Used to identify the key words or structures of this grammar point.
          </Text>
        </View>
      </Animated.View>
    </View>
  );
};

export default Hint;
