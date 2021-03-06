import {StyleSheet} from 'react-native';

const notificationItemStyles = StyleSheet.create({
  container: {
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },
  iconLeft: {
    paddingTop: 5,
  },
  iconRight: {
    justifyContent: 'center',
  },
  containerText: {
    width: 250,
    marginLeft: 15,
    marginRight: 10,
  },
  title: {
    fontFamily: 'AktivGroteskCorp-Bold',
    fontSize: 19,
    textTransform: 'uppercase',
  },
  subtitle: {
    fontFamily: 'AktivGroteskCorp-Light',
    fontSize: 13,
  },
});

export default notificationItemStyles;
