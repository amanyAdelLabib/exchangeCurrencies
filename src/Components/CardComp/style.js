
import {StyleSheet} from 'react-native';
import {Colors} from '../../Utils/Colors';
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
const styles = StyleSheet.create({
  container: {
    width:responsiveWidth(40),
    height:responsiveHeight(15),
    justifyContent:"center",
    alignItems:'center',
    borderRadius:10,
    marginHorizontal:responsiveWidth(1),
    marginVertical:responsiveHeight(1),
    backgroundColor:Colors.appColor2
  },
  text:{
    fontWeight:'bold',
    color:Colors.white,
    fontSize:responsiveFontSize(2),
    marginTop:responsiveHeight(1)

    
  }
});
export default styles;
