import {StyleSheet} from 'react-native';

const modalStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    marginBottom: 7,
    borderRadius: 8,
  },
  label: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    width: 45,
  },
  backdrop: {
    backgroundColor: '#2b2a2ab8',
  },
  overlay: {
    width: '100%',
    borderRadius: 0,
    paddingBottom: 50,
    paddingTop: 20,
  },
  content: {width: '100%'},
  exit: {alignItems: 'flex-end', paddingRight: 10, paddingLeft: 10},
});

export default modalStyles;
