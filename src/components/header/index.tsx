/* ------------------------------ Basic imports ----------------------------- */
import React from 'react';
import {Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import {hitSlop, styles} from './styles';

/* -------------------------------- Libraries ------------------------------- */
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SvgXml} from 'react-native-svg';

/* ---------------------------------- Utils --------------------------------- */
import {dw} from '../../utils/dimensions';

/* ---------------------------------- Types --------------------------------- */
import {HeaderType} from './type';

const Header: HeaderType = ({
  title,
  leftIcon,
  containerStyles,
  titleStyles,
  leftIconProps,
  leftIconStyles,
  leftBtnStyles,
  onLeftIconPress,
}) => {
  /* --------------------------------- Hooks ---------------------------------- */

  const {top} = useSafeAreaInsets();

  /* --------------------------------- Render --------------------------------- */

  return (
    <LinearGradient
      useAngle={true}
      angle={180}
      locations={[0, 1]}
      colors={['#3585BD', '#6CAEE7']}
      style={[
        styles.header,
        {
          paddingTop: top,
          minHeight: top + dw(42),
        },
        containerStyles,
      ]}>
      <View style={styles.header__container}>
        {!!leftIcon && (
          <TouchableOpacity
            hitSlop={hitSlop.leftBtn}
            style={[styles.header__leftBtn, leftBtnStyles]}
            onPress={onLeftIconPress}>
            <SvgXml
              {...leftIconProps}
              xml={leftIcon}
              style={[styles.header__icon as ViewStyle, leftIconStyles]}
            />
          </TouchableOpacity>
        )}

        {!!title && (
          <Text style={[styles.header__title, titleStyles]}>{title}</Text>
        )}
      </View>
    </LinearGradient>
  );
};

export default Header;
