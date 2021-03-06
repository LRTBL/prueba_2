import {StyleSheet} from 'react-native';

const drawerContentStyles = StyleSheet.create({
  accordion: {
    paddingLeft: 40,
    paddingTop: 0,
    paddingBottom: 0,
  },
  titleAccordion: {
    marginLeft: 20,
    fontSize: 14,
    fontFamily: 'AktivGroteskCorp-Light',
  },
  itemAccordion: {
    backgroundColor: '#fff',
    paddingTop: 3,
    paddingBottom: 3,
    justifyContent: 'flex-start',
    paddingLeft: 94,
  },
  itemAccordionTitle: {
    color: '#000',
    fontWeight: '100',
    // fontFamily: 'Monserrat',
    fontFamily: 'AktivGroteskCorp-Light',
    fontSize: 14,
    textAlign: 'left',
  },
  singleContainer: {
    height: 45,
    marginTop: 5,
  },
  singleButton: {
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    paddingLeft: 40,
  },
  singleTitle: {
    color: '#000',
    fontWeight: '100',
    fontFamily: 'AktivGroteskCorp-Light',
    fontSize: 14,
    marginLeft: 30,
  },
});

export default drawerContentStyles;
