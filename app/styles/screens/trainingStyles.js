import {StyleSheet} from 'react-native';
import Colors from '../Colors';

const trainingStyles = StyleSheet.create({
  listSection: {
    borderRadius: 12,
    marginBottom: 20,
  },
  listAcordion: {
    backgroundColor: '#ebe7ed',
    paddingLeft: 10,
    paddingTop: 1,
    paddingBottom: 1,
    borderRadius: 12,
  },
  titleListAcordion: {
    fontSize: 24,
    fontFamily: 'AktivGroteskCorp-Bold',
  },
  trainingItem: {
    marginTop: 20,
    flexDirection: 'row',
  },
  trainingDate: {
    alignItems: 'center',
    width: '15%',
    paddingTop: 25,
    marginRight: 10,
  },
  textTrainingDate: {
    color: Colors.PRIMARY,
    fontFamily: 'AktivGroteskCorp-Bold',
    fontSize: 20,
  },
  contentContainer: {
    width: '81%',
  },
  textRange: {
    marginBottom: 10,
    fontFamily: 'AktivGroteskCorp-Light',
  },
  itemContainer: {
    flexDirection: 'row',
    borderRadius: 10,
    borderColor: Colors.SECONDARY,
    borderWidth: 1,
    padding: 15,
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  itemTitle: {
    color: Colors.SECONDARY,
    fontSize: 13,
    fontFamily: 'AktivGroteskCorp-Bold',
    textTransform: 'uppercase',
  },
  itemHour: {
    color: Colors.SECONDARY,
    fontSize: 13,
    fontFamily: 'AktivGroteskCorp-Light',
  },
});

export default trainingStyles;
