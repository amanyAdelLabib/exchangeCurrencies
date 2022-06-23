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

  },
  DropdownListContainer:{
    // backgroundColor:'red',
    marginTop:responsiveHeight(5)
  },
  btnStyle: {
    width: responsiveWidth(60),
    borderRadius:20,
    marginTop:responsiveHeight(spacing.sm),
    backgroundColor:Colors.appColor7
   
    

  },
  labelBtnStyle:{ color: Colors.white, fontSize: spacing.md },
  labelDisable:{
    fontSize: responsiveFontSize(2.3),
    fontWeight:'bold',
    color:Colors.appColor2
  }
 
});
