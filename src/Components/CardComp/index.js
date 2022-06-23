import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// import {Colors} from '../../Utils/Colors';
import styles from './style';

export function CardComp({
  title,
  iconName,
  iconColor,
  iconSize,
  // ---------styles---------
  style,
  textStyle,

  //------------------
  onPress,
  ...props
}) {
  return (
    <TouchableOpacity style={[styles.container,style]}onPress={onPress}>
      <Icon name={iconName} size={iconSize} color={iconColor} />
        <Text style={[styles.text,textStyle]}>{title}</Text>
  </TouchableOpacity>
  )
}
