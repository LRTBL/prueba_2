import React from 'react';
import {View} from 'react-native';
import {PromotionContent} from '../../components/commercial';
import SwitchSelector from 'react-native-switch-selector';
import {Colors} from '../../styles';
import {withNavigation} from 'react-navigation';
import {promotionStyles} from '../../styles/screens';

const PromotionContentScreen = ({navigation, type}) => {
  const options = [
    {label: 'Calzado', value: '1'},
    {label: 'Accesorios', value: '2'},
  ];
  const [subtype, setSubtype] = React.useState('1');

  return (
    <View>
      <View style={promotionStyles.container}>
        <SwitchSelector
          selectedTextStyle={promotionStyles.textSelectedSwitchSelector}
          textStyle={promotionStyles.textSwitchSelector}
          buttonColor={Colors.YELLOW}
          borderColor={Colors.YELLOW}
          buttonMargin={-1}
          hasPadding
          options={options}
          initial={0}
          onPress={(value) => setSubtype(value)}
        />
      </View>
      <PromotionContent type={type} subType={subtype} navigation={navigation} />
    </View>
  );
};

export default withNavigation(PromotionContentScreen);
