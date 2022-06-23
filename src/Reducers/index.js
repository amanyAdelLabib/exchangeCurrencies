import {combineReducers} from 'redux';
import {findLocationReducer} from './findLocationReducer';
import {getCoordsReducer} from './getCoordsReducer';
import {convertCurrencyReducer} from './convertCurrencyReducer';
import {getCurrenciesReducer} from './getCurrenciesReducer';
import {getCurrenciesRateReducer} from './getCurrenciesRateReducer';
import {getCurrenciesChartReducer} from './getCurrenciesChartReducer';
import {getCurrenciesBaseReducer} from './getCurrenciesBaseReducer';

export const combinedReducers = combineReducers({
   Location: findLocationReducer,
   coords: getCoordsReducer,
   convertCurrency:convertCurrencyReducer,
   getCurrencies:getCurrenciesReducer,
   getCurrenciesRate:getCurrenciesRateReducer,
   getCurrenciesChart:getCurrenciesChartReducer,
   getCurrenciesBase:getCurrenciesBaseReducer

   });