import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {Colors} from '../../Utils/Colors';
import styles from './style';
import {Button} from 'react-native-paper';

export function ButtonComp({
  text,
  icon,
  mode,
  // ---------styles---------
  style, // button styles
  contentStyle,
  containerView,
  textColor, // text styles
  buttonColor,
  labelStyle,
  color,
  //------------------
  onPress,
  ...props
}) {
  return (
    <View style={[styles.container,containerView]}>
          <Button
      icon={icon}
      contentStyle={contentStyle}
      style={style}
      mode={mode}
      // textColor={textColor}
      // buttonColor={buttonColor}
      color={color}
      labelStyle={labelStyle}
      onPress={onPress}
      {...props}
      >
      {text}
      
    </Button>
    </View>
  );
}
