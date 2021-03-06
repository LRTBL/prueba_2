import React from 'react';
import {View} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import {Colors, switcherStyles} from '../../../styles';
import AdviceScreen from './AdviceScreen';
import BirthDayScreen from './BirthDayScreen';
import EventScreen from './EventScreen';
import {withNavigation} from 'react-navigation';

const WeAreFootlooseScreen = ({navigation}) => {
  const options = [
    {
      label: 'Avisos',
      value: 0,
      component: <AdviceScreen navigation={navigation} />,
    },
    {
      label: 'Eventos',
      value: 1,
      component: <EventScreen navigation={navigation} />,
    },
    {
      label: 'Cumpleaños',
      value: 2,
      component: <BirthDayScreen />,
    },
  ];
  const [state, setState] = React.useState(0);

  return (
    <View style={switcherStyles.container}>
      <View style={switcherStyles.swContainer}>
        <SwitchSelector
          selectedTextStyle={switcherStyles.selectedSwRhh}
          textStyle={switcherStyles.unselectedSwRhh}
          buttonColor={Colors.PRIMARY}
          borderColor={Colors.PRIMARY}
          buttonMargin={-1}
          hasPadding
          options={options}
          initial={0}
          onPress={(value) => setState(value)}
        />
      </View>
      <View style={switcherStyles.subContainer}>
        {options[state].component}
      </View>
    </View>
  );
};

export default withNavigation(WeAreFootlooseScreen);
