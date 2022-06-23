import React, {useEffect, useState, useMemo} from 'react';
import {
  Text,
  SafeAreaView,
} from 'react-native';
import reactotron from 'reactotron-react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../Utils/Colors';
import style from './style';
import {convertBetweenCurrency} from '../../Actions';
import {DropdownList, TextInputComp, ButtonComp} from '../../Components';
export const ExchangeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // -------------------------------- state --------------------------------------

  const [firstCurrency, setFirstCurrency] = useState(null);
  const [secondCurrency, setSecondCurrency] = useState(null);
  const [value, setValue] = useState(null);
  const [valueAfterExchange, setValueAfterExchange] = useState(null);
  const [items, setItems] = useState([]);

  // -------------------------------- reducer --------------------------------------

  const {data: allCurrencies, allCurrenciesLoading} = useSelector(
    state => state?.getCurrencies || {},
  );

  const {data: exchangeCurrency, exchangeCurrencyLoading} = useSelector(
    state => state?.convertCurrency || {},
  );

  // -------------------------------- use effect --------------------------------------

  useEffect(() => {
    if (Object.keys(allCurrencies).length != 0) {
      const test = Object.keys(allCurrencies).map(key => {
        return {label: allCurrencies[key], value: key};
      });
      setItems(test);
    }
  }, []);

  useEffect(() => {
    let temp = value * exchangeCurrency[secondCurrency];
    if (isNaN(temp)) {
      setValueAfterExchange('...');
    } else {
      setValueAfterExchange(temp);
    }
  }, [exchangeCurrency]);
  
  return (
    <SafeAreaView style={style.container}>
      <DropdownList
        wrapperStyle={style.DropdownListContainer}
        options={items}
        onChange={setFirstCurrency}
        label="Choose First Currency Type(From)"
        value={firstCurrency}
        maxHeight={190}
        listMode="FLATLIST"
        placeholder='Enter Currency'
        searchable={true}
      />

      <DropdownList
        wrapperStyle={style.DropdownListContainer}
        options={items}
        onChange={setSecondCurrency}
        label="Choose Second Currency Type(To)"
        value={secondCurrency}
        maxHeight={140}
        listMode="FLATLIST"
        placeholder='Enter Currency'

        searchable={true}
      />
      <TextInputComp
        label="Enter Currency"
        onChange={setValue}
        style={{color: 'red'}}
        placeholder='Enter Amount'

        keyboardType="number-pad"
      />
      <TextInputComp
        label={
          <Text style={style.labelDisable}>
            {`Exchange Currency is ${valueAfterExchange}`}
          </Text>
        }
        disabled={true}
      />
      <ButtonComp
        mode="contained"
        text="Calculate"
        style={style.btnStyle}
        color={Colors.appColor2}
        labelStyle={style.labelBtnStyle}
        onPress={() => {
          dispatch(
            convertBetweenCurrency({from: firstCurrency, to: secondCurrency}),
          );
        }}
        disabled={exchangeCurrencyLoading}
      />
    </SafeAreaView>
  );
};
