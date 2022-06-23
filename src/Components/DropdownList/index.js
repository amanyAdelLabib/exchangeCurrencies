import React ,{useEffect,useState}from 'react';
import {ActivityIndicator, Text, TouchableHighlight,View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import {Colors} from '../../Utils/Colors';
import styles from './style';

export function DropdownList({
  placeholder = 'placeholder',
  options = [],
  value,
  searchable=false,
  searchPlaceholder="Search...",
  onChange = (value) => {},
  itemSeparator = true,
  closeAfterSelecting = true,
  closeOnBackPressed = true,
  listMode = 'SCROLLVIEW',
  label,
  labelStyle,
  containerStyle,
  style,
  dropDownContainerStyle,
  placeholderStyle,
  selectedItemLabelStyle,
  selectedItemContainerStyle,
  listItemContainerStyle,
  searchPlaceholderTextColor,
  searchContainerStyle,
  searchTextInputProps,
  searchTextInputStyle,
  textStyle,
  wrapperStyle,
  ...props
}) {
  const [open, setOpen] = useState(false);
  const [pickedValue, setPickedValue] = useState(value);
  useEffect(() => {
    setPickedValue(value);
  }, [value]);
  const handleOpenToggle = () => {
    setOpen((prevState) => !prevState);
  };


  const handleSelectItem = (item) => {
    let newValue;

      newValue = item?.value;
  
    setPickedValue(newValue);
    onChange(newValue);
  };


  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      {label && (<Text style={[styles.label,labelStyle]}>{label}</Text>)}
        <DropDownPicker
          listMode={listMode}
          textAlign="right"
          searchable={searchable}
          searchPlaceholder={searchPlaceholder}
          open={open}
          items={options}
          value={pickedValue}
          placeholder={placeholder}
          setOpen={handleOpenToggle}
          onSelectItem={handleSelectItem}
          closeAfterSelecting={closeAfterSelecting}
          closeOnBackPressed={closeOnBackPressed}
          style={[styles.container(), containerStyle]}
          dropDownContainerStyle={styles.dropDownContainer()}
          selectedItemContainerStyle={[
            styles.selectedItemContainer,
            selectedItemContainerStyle,
          ]}
          selectedItemLabelStyle={styles.selectedItemLabel}
          listItemContainerStyle={styles.listItemContainer}
          searchContainerStyle={searchContainerStyle}
          searchTextInputProps={searchTextInputProps}
          searchTextInputStyle={searchTextInputStyle}
          searchPlaceholderTextColor={searchPlaceholderTextColor}
          itemSeparator={itemSeparator}
          itemSeparatorStyle={styles.itemSeparator}
          textStyle={[styles.text, textStyle]}
          placeholderStyle={[styles.placeholder, placeholderStyle]}
          modalTitle={placeholder}
          {...props}
        />
      </View>

  );
}
