import React from 'react';
import {Button} from 'react-native-elements';
import {drawerContentStyles} from '../../styles/components';

const ItemDrawerAcordionButton = ({navigation, title, toNavigate}) => {
  return (
    <Button
      title={title}
      onPress={() => {
        navigation.navigate(toNavigate);
      }}
      buttonStyle={drawerContentStyles.itemAccordion}
      titleStyle={drawerContentStyles.itemAccordionTitle}
    />
  );
};

export default ItemDrawerAcordionButton;
