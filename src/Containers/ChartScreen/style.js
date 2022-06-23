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
  DropdownListContainer:{
    // backgroundColor:'red',
    marginTop:responsiveHeight(5)
  },
  chartContainer:{
    // marginHorizontal:responsiveWidth(3),
    // marginVertical:responsiveHeight(3),
    // justifyContent:'center',
    // alignContent:'center',
    alignItems:'center'
  },
  btnStyle: {
    width: responsiveWidth(60),
    borderRadius:20,
    marginTop:responsiveHeight(spacing.sm),
    backgroundColor:Colors.appColor7
   
    

  },
  labelBtnStyle:{ color: Colors.white, fontSize: spacing.md },
});
