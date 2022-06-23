import {StyleSheet, Platform, StatusBar} from 'react-native';
import {fontSize, spacing} from '../../Utils/Sizing';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Colors} from '../../Utils/Colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop:Platform.OS=='android'?StatusBar.currentHeight:0
  },
  imageContainer: {flex: 1, justifyContent: 'center', alignItems:'center'},
  title: {
    fontWeight: 'bold',
    fontSize: responsiveFontSize(3),
    color: Colors.appColor1,
    // textAlign: 'center',
  },
 
  btnStyle: {
    width: responsiveWidth(60),
    borderRadius:20,
    marginTop:responsiveHeight(spacing.sm),
    

  },
  labelBtnStyle:{ color: Colors.white, fontSize: spacing.md },

  
});
