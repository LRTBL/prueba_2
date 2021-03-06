import {StyleSheet} from 'react-native';
import Colors from '../Colors';

const itemNewStyles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
    flexDirection: 'row',
    borderRadius: 15,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 5,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    width: 210,
  },
  content: {width: 200, fontSize: 12},
  hour: {marginRight: 20, marginLeft: 20, paddingTop: 5, fontSize: 12},
  icon: {justifyContent: 'center'},
});

export default itemNewStyles;
