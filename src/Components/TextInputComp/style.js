import {StyleSheet} from 'react-native';
import {Colors} from '../../Utils/Colors';
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
const styles = StyleSheet.create({
  containerStyle: {
    // width:responsiveWidth(5)
    marginHorizontal: responsiveWidth(5),
    marginVertical:responsiveHeight(4),
    borderRadius:10,
    backgroundColor:Colors.white
    // borderWidth:1
  },
});
export default styles;
