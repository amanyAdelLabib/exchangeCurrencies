import {
  GET_Coords,
  CONVERT_CURRENCY_PENDING,
  CONVERT_CURRENCY_FAIL,
  CONVERT_CURRENCY_SUCCESS,
  GET_CURRENCIES_TYPES_FAIL,
  GET_CURRENCIES_TYPES_SUCCESS,
  GET_CURRENCIES_TYPES_PENDING,
  FIND_LOCATION_Pending,
  FIND_LOCATION_FAIL,FIND_LOCATION_SUCCESS,
  GET_CURRENCIES_RATE_FAIL,
  GET_CURRENCIES_RATE_PENDING,
  GET_CURRENCIES_RATE_SUCCESS,
  GET_CURRENCIES_FOR_CHART_FAIL,
  GET_CURRENCIES_FOR_CHART_SUCCESS,
  GET_CURRENCIES_FOR_CHART_PENDING,
  GET_CURRENCIES_BASE_FAIL,
  GET_CURRENCIES_BASE_PENDING,
  GET_CURRENCIES_BASE_SUCCESS
} from './types';
import UserApi from '../Services';

export const userApiObj = new UserApi();
export const getCoords = data => {
  return {
    type: GET_Coords,
    payload: {data},
  };
};

export const findCoords = (data) => {
  console.log('data lat')
  console.log(data)
  return dispatch => {
    dispatch({type: FIND_LOCATION_Pending});

    userApiObj
      .FindCoords(data)
      .then(res => {
        if (res.status == 200) {
          dispatch({type: FIND_LOCATION_SUCCESS, payload: {response:res.data}});
        } else {
          dispatch({type: FIND_LOCATION_FAIL});
        }
      })
      .catch(err => {
        // Alert.alert('Warning', 'Check your connection!');
        console.log('in action login catch');
        console.log(err);
      });
  };
};

export const convertBetweenCurrency = data => {
  console.log('convertBetweenCurrency');
  // console.log(data);
  return dispatch => {
    console.log('data in login action');
    dispatch({type: CONVERT_CURRENCY_PENDING});

    userApiObj
      .ConvertCurrencies(data)
      .then(res => {
        if (res.status == 200) {
          dispatch({type: CONVERT_CURRENCY_SUCCESS, payload: {response:res.data}});
        } else {
          dispatch({type: CONVERT_CURRENCY_FAIL});
        }
      })
      .catch(err => {
        // Alert.alert('Warning', 'Check your connection!');
        console.log('in action login catch CONVERT_CURRENCY_FAIL');
        console.log(err);
        dispatch({type: CONVERT_CURRENCY_FAIL});

      });
  };
};

export const getCurrenciesType = () => {
  console.log('getCurrenciesType');
  return dispatch => {
    console.log('data in login action');
    dispatch({type: GET_CURRENCIES_TYPES_PENDING});
    userApiObj
      .GetCurrencies()
      .then(res => {
       
        if (res.status == 200) {
          dispatch({type: GET_CURRENCIES_TYPES_SUCCESS, payload: {response:res.data}});
        } else {
          dispatch({type: GET_CURRENCIES_TYPES_FAIL});
        }
      })
      .catch(err => {
        // Alert.alert('Warning', 'Check your connection!');
        console.log('in action login catch');
        console.log(err);
        dispatch({type: GET_CURRENCIES_TYPES_FAIL});
      });
  };
};

export const getCurrenciesRate = (data) => {
  console.log('getCurrenciesType');
  return dispatch => {
    console.log('data in login action');
    dispatch({type: GET_CURRENCIES_RATE_PENDING});
    userApiObj
      .GetRate(data)
      .then(res => {
       
        if (res.status == 200) {
          dispatch({type: GET_CURRENCIES_RATE_SUCCESS, payload: {response:res.data}});
        } else {
          dispatch({type: GET_CURRENCIES_RATE_FAIL});
        }
      })
      .catch(err => {
        // Alert.alert('Warning', 'Check your connection!');
        console.log('in action login catch');
        console.log(err);
        dispatch({type: GET_CURRENCIES_RATE_FAIL});
      });
  };
};



export const getCurrenciesForChart = () => {
  console.log('getCurrenciesType');
  return dispatch => {
    console.log('data in login action');
    dispatch({type: GET_CURRENCIES_FOR_CHART_PENDING});
    userApiObj
      .GetCurrenciesForChart()
      .then(res => {
       
        if (res.status == 200) {
          dispatch({type: GET_CURRENCIES_FOR_CHART_SUCCESS, payload: {response:res.data}});
        } else {
          dispatch({type: GET_CURRENCIES_FOR_CHART_FAIL});
        }
      })
      .catch(err => {
        // Alert.alert('Warning', 'Check your connection!');
        console.log('in action login catch');
        console.log(err);
        dispatch({type: GET_CURRENCIES_FOR_CHART_FAIL});
      });
  };
};