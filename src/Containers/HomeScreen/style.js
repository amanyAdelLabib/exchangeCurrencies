import {StyleSheet, Platform, StatusBar} from 'react-native';
import {fontSize} from '../../Utils/Sizing';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Colors} from '../../Utils/Colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: responsiveHeight(10),
    marginHorizontal: responsiveWidth(5),
    // backgroundColor:'red'

    // paddingTop:Platform.OS=='android'?StatusBar.currentHeight:0
  },
  titleView: {
    marginVertical: responsiveHeight(5),
  },
  title: {
    fontSize: responsiveFontSize(4),
    textAlign: 'center',
  },
  flatListContainer: {
    alignItems: 'center',
  },
});
