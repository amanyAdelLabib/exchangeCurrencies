import React,{useState} from 'react';
import {ActivityIndicator, Text, TouchableHighlight} from 'react-native';
// import {Colors} from '../../Utils/Colors';
import styles from './style';
import {TextInput } from 'react-native-paper';

export function TextInputComp({
  label,
  mode,
  disabled=false,
  placeholder,
  // ---------styles---------
  style,
 
  //------------------
  onChange,
  ...props
}) {
  const [text, setText] = useState("");

  const onChangeText=(val)=>{
    setText(val)
    onChange(val)

  }
  return (
<TextInput
      label={label}
      placeholder={placeholder}
      value={text}
      onChangeText={onChangeText}
      mode={mode}
      disabled={disabled}
      style={[styles.containerStyle]}
      {...props}
    />
  );
}
