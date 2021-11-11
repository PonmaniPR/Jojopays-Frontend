import {StyleSheet} from 'react-native';
import COLORS from './colors';

const STYLES = StyleSheet.create({
  inputContainer: {flexDirection: 'row', marginTop: 15, marginBottom:15},
  input: {
    color: COLORS.dark,
    paddingLeft: 30,
    borderBottomWidth: 1,
    borderColor: COLORS.light,
    borderBottomWidth: 0.6,
    flex: 1,
    fontSize: 18,
  },
  inputIcon: {marginTop: 4, position: 'absolute'},
  btnPrimary: {
    backgroundColor: COLORS.navy,
    height: 50,
    // borderRadius: 15 ,
    borderBottomLeftRadius:5,
    borderBottomRightRadius:17,
    borderTopLeftRadius:17,
    borderTopRightRadius:5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },

  btnText: {
    height: 50,
    paddingTop:10,
    color: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize:20,
  },

});

export default STYLES;