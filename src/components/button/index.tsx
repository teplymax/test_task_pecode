/* ------------------------------ Basic imports ----------------------------- */
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

/* ---------------------------------- Types --------------------------------- */
import {ButtonType} from './type';

const Button: ButtonType = ({
  text,
  containerStyles,
  textStyles,
  children,
  ...props
}) => {
  /* --------------------------------- Render --------------------------------- */

  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.button,
        containerStyles,
        props.disabled && styles.button_disabled,
      ]}>
      {children ? (
        children
      ) : (
        <Text style={[styles.button__text, textStyles]}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
