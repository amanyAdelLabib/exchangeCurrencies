import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { Colors } from '../../Utils/Colors';
const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: responsiveWidth(5),

  },
  dropDownContainer: () => ({

  }),
  container: () => ({
    height: responsiveHeight(5),
    borderWidth: 1,
    width:  responsiveWidth(90),
    marginVertical: responsiveHeight(1),
    borderColor: Colors.appColor3,
    zIndex: 1000,
    elevation: 1000,
  }),
  selectedItemContainer: {
    backgroundColor:Colors.activeBackground,
  },
  selectedItemLabel: {
    fontWeight:'bold'
  },
  listItemContainer: {
    // marginBottom: 10,
    // backgroundColor:'red'
    // height: hp(100),
  },
  // -----------------------------------

  itemSeparator: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.appColor4,
    alignSelf: 'center',
  },

  placeholder: {
    color: Colors.appColor5,
    fontSize: responsiveFontSize(2),
  },

  text: {
    color: Colors.appColor6,
    textAlign: 'left',
  },

  label:{
    fontSize:responsiveFontSize(2.5),
    fontWeight:'bold'
  }

});
export default styles;
