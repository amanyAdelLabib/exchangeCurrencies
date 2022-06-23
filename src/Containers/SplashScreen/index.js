import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  PermissionsAndroid,
  Platform,
  StatusBar,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import style from './style';
import {ButtonComp} from '../../Components';
import {Colors} from '../../Utils/Colors';
import {findCoords} from '../../Actions';
export const SplashScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [showBtn, setShowBtn] = useState(false);
  const [coords, setCoords] = useState({});
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const {data: locationData} = useSelector(
    state => state?.Location || {},
  );
  useEffect(() => {
    console.log('111111111111111111111111111');
    requestPermissions();
  }, []);

  useEffect(() => {
    console.log('222222222222222');
    console.log('get position');
    console.log(coords);
    if (Object.keys(coords).length !== 0) {
      console.log('333333333333');
      console.log('get position have');
      dispatch(
        findCoords({
          lat: coords.latitude,
          long:coords.longitude,
        }),
      );
    }

  }, [coords]);

  useEffect(() => {

    if (Object.keys(locationData).length !== 0) {
      console.log('333333333333');
      console.log('get position have');
      setShowBtn(true);

    }

  }, [locationData]);
  async function requestPermissions() {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    // await PermissionsAndroid.check(
    //   PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    // );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the location');
      Geolocation.getCurrentPosition(
        position => {
          console.log(position);
          setCoords(position.coords);
        },
        error => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    } else {
      console.log('location permission denied');
    }
  }
  const onPress = () => {
    navigation.navigate('Home');
    // dispatch(testApiAction()
  };
  return (
    <SafeAreaView style={style.container}>
      <ImageBackground
        source={require('../../Assets/Images/background.png')}
        resizeMode="cover"
        style={style.imageContainer}>
        <Text style={style.title}>Welcome To Our App</Text>
        {showBtn && (
          <ButtonComp
            mode="contained"
            text="Let`s start"
            style={style.btnStyle}
            color={Colors.appColor2}
            labelStyle={style.labelBtnStyle}
            onPress={() => onPress()}
          />
        )}
      </ImageBackground>
    </SafeAreaView>
  );
};
