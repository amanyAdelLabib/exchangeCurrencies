import React, {useEffect, useState, useMemo} from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import reactotron from 'reactotron-react-native';
import {
  LineChart,
} from 'react-native-chart-kit';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import moment from 'moment';
import {DropdownList, ButtonComp} from '../../Components';

import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../Utils/Colors';

import style from './style';
import {getCurrenciesRate, getCurrenciesForChart} from '../../Actions';
export const ChartScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // -------------------------------- state --------------------------------------
  const [period, setPeriod] = useState(null);
  const [currencyFrom, setCurrencyFrom] = useState(null);
  const [currencyTo, setCurrencyTo] = useState(null);
  const [currenciesChart, setCurrenciesChart] = useState([]);
  const [todayDate, setTodayDate] = useState(new Date());
  const [history, setHistory] = useState([]);
  const [rates, setRates] = useState([]);
  const [btnFlag, setBtnFlag] = useState(false);


  // -------------------------------- reducer --------------------------------------

  const {data: currencyRate, allCurrenciesRateLoading} = useSelector(
    state => state?.getCurrenciesRate || {},
  );
  const {data: allCurrenciesChart, allCurrenciesChartLoading} = useSelector(
    state => state?.getCurrenciesChart || {},
  );

  // -------------------------------- use effect --------------------------------------

  useEffect(() => {
    dispatch(getCurrenciesForChart());
  }, []);
  useEffect(() => {
    if (Object.keys(allCurrenciesChart).length !== 0) {
      const test = Object.keys(allCurrenciesChart).map(key => {
        return {label: allCurrenciesChart[key], value: key};
      });
      setCurrenciesChart(test);
    }
  }, [allCurrenciesChart]);
  useEffect(() => {
    if (Object.keys(currencyRate).length !== 0 && btnFlag) {
      const test = Object.keys(currencyRate.rates);
      const test2 = Object.values(currencyRate.rates);
      setHistory(test);
      let arr = [];
      for (let i = 0; i < test2.length; i++) {
        arr.push(Object.values(test2[i]));
      }
      setRates(arr);
    }

  }, [currencyRate]);

  // -------------------------------- functions  --------------------------------------

  const getDate = val => {
    let tempDate = new Date();
    tempDate.setDate(todayDate.getDate() - val);
    return moment(tempDate).format('YYYY-MM-DD');
  };

  const onPressCalculate=() => {
    setBtnFlag(true)
    dispatch(
      getCurrenciesRate({
        dateFrom: period,
        dateTo: moment(todayDate).format('YYYY-MM-DD'),
        currencyFrom: currencyFrom,
        currencyTo: currencyTo,
      }),
    );
  }

  return (
    <SafeAreaView style={style.container}>
      <DropdownList
        wrapperStyle={style.DropdownListContainer}
        options={[
          {label: '1 D', value: getDate(2)},
          {label: '15 D', value: getDate(15)},
          {label: '1 M', value: getDate(30)},
        ]}
        onChange={setPeriod}
        label="Choose Period"
        value={period}
        maxHeight={190}
        listMode="FLATLIST"
        placeholder="Enter Period"
      />
      <DropdownList
        wrapperStyle={style.DropdownListContainer}
        options={currenciesChart}
        onChange={setCurrencyFrom}
        label="Choose Currency (From)"
        value={currencyFrom}
        maxHeight={190}
        listMode="FLATLIST"
        searchable={true}
        placeholder="Enter Currency From"
      />
      <DropdownList
        wrapperStyle={style.DropdownListContainer}
        options={currenciesChart}
        onChange={setCurrencyTo}
        label="Choose Currency (To)"
        value={currencyTo}
        maxHeight={190}
        listMode="FLATLIST"
        searchable={true}
        placeholder="Enter Currency To"
      />

      <ButtonComp
        mode="contained"
        text="Calculate"
        style={style.btnStyle}
        color={Colors.appColor2}
        labelStyle={style.labelBtnStyle}
        onPress={() =>onPressCalculate()}
        disabled={allCurrenciesChartLoading}
      />
      <ScrollView>
        {(history.length !== 0 && rates.length !== 0) && (
          <View style={style.chartContainer}>
            <LineChart
              data={{
                labels: history,
                datasets: [
                  {
                    data: rates,
                  },
                ],
              }}
              verticalLabelRotation={90} //Degree to rotate
              width={responsiveWidth(90)} // from react-native
              height={500}
              yAxisLabel="$"
              yAxisSuffix="k"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: Colors.appColor9,
                backgroundGradientFrom: Colors.appColor10,
                backgroundGradientTo: Colors.appColor11,
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: '#ffa726',
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
