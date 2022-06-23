import axios from 'axios';
//import config from '../../config/config';

export default class UserApi {
  constructor() {
    this.apiUrl = 'https://cmiles.app';
  }

  init(urlInit) {
    console.log('url  >>>>>>>>' + urlInit);
    this.headers = {'Content-Type': 'application/json'};
    this.client = axios.create({
      baseUrl: urlInit,
      //timeout:31000
      headers: this.headers,
    });
    return this.client;
  }

  /*********************** login function  **************************************************/
  FindCoords(data) {
    // console.log('in login return service');
    console.log('date login');
    console.log(data);
    return this.init()
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${data.lat},${data.long}&key=AIzaSyA6uc5-fmPTyFBKsqhlOlxChFo8OTqIJYA`,
      )
      .then(res => {
        // console.log('in then login class');
        // console.log(res.data)
        console.log('hoooooooooooooooooooooogle');

        console.log(res);

        return res;
      })
      .catch(err => {
        console.log('in login class catch err');
        console.log(err);

        console.log(err.response.data);
        return err;
      });
  }

  /*********************** get currencies api  **************************************************/
  GetCurrencies() {
    return this.init()
      .get(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json`,
      )
      .then(res => {
        console.log(res);

        return res.data;
      })
      .catch(err => {
        console.log('in login class catch err');
        console.log(err);

        console.log(err.response.data);
        return err;
      });
  }

  /*********************** convert currencies api  **************************************************/
  ConvertCurrencies(data) {
    console.log(' ConvertCurrencies api');

    return this.init()
      .get(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${data.from}/${data.to}.json`,
      )
      .then(res => {
        console.log(res);

        return res;
      })
      .catch(err => {
        console.log('in login class catch err');
        console.log(err);

        console.log(err.response.data);
        return err;
      });
  }

  /*********************** get currencies api  **************************************************/
  GetCurrencies() {
    return this.init()
      .get(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json`,
      )
      .then(res => {
        console.log(res);

        return res;
      })
      .catch(err => {
        console.log('in login class catch err');
        console.log(err);

        console.log(err.response.data);
        return err;
      });
  }

  /*********************** get currencies rate api  **************************************************/
  GetRate(data) {
    console.log('in rate');
    console.log(
      `${data.dateFrom}..${data.dateTo}?from=${data.currencyFrom}&to=${data.currencyTo}`,
    );
    return this.init()
      .get(
        `https://api.frankfurter.app/${data.dateFrom}..${data.dateTo}?from=${data.currencyFrom}&to=${data.currencyTo}`,
      )
      .then(res => {
        console.log(res);

        return res;
      })
      .catch(err => {
        console.log('in login class catch err');
        console.log(err);

        console.log(err.response.data);
        return err;
      });
  }

  /*********************** get currencies for chart api  **************************************************/
  GetCurrenciesForChart() {
    return this.init()
      .get(`https://api.frankfurter.app/currencies`)
      .then(res => {
        console.log(res);

        return res;
      })
      .catch(err => {
        console.log('in login class catch err');
        console.log(err);

        console.log(err.response.data);
        return err;
      });
  }

  /*********************** get currencies for Base api  **************************************************/
  GetCurrenciesBase(data) {
    return this.init()
      .get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json`)
      .then(res => {
        console.log(res);

        return res;
      })
      .catch(err => {
        console.log('in login class catch err');
        console.log(err);

        console.log(err.response.data);
        return err;
      });
  }
}
