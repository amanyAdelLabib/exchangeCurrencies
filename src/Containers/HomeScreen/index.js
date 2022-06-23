import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import * as RNLocalize from 'react-native-localize';

import style from './style';
import {ButtonComp, CardComp} from '../../Components';
import {Colors} from '../../Utils/Colors';
import {fontSize, spacing} from '../../Utils/Sizing';
import {getCurrenciesType} from '../../Actions';
import {Cards} from '../../Constants/homeCards';
export const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // -------------------------------- reducer --------------------------------------
  const {data: locationData} = useSelector(state => state?.Location || {});

  // -------------------------------- use effect --------------------------------------

  useEffect(() => {
    console.log('111111111111111111111111111');
    console.log(RNLocalize.getLocales());
    console.log(RNLocalize.getCurrencies());
    console.log(RNLocalize.getCountry());
    dispatch(getCurrenciesType());
  }, []);

  // -------------------------------- function --------------------------------------

  const renderItem = ({item}) => (
    <CardComp
      title={item.title}
      iconName={item.iconName}
      iconColor={item.iconColor}
      iconSize={25}
      onPress={() => navigation.navigate(item.navigationName)}
    />
  );
  return (
    <SafeAreaView style={style.container}>
      <View style={style.titleView}>
        <Text style={style.title}>
          Welcome from {locationData.results[0].address_components[4].long_name}
        </Text>
      </View>
      <FlatList
        contentContainerStyle={style.flatListContainer}
        horizontal={false}
        data={Cards}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </SafeAreaView>
  );
};
