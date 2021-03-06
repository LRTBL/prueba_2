import React from 'react';
import {Button} from 'react-native-elements';
import {drawerContentStyles} from '../../styles/components';

const DrawerSingleButton = ({navigation, title, toNavigate, icon}) => {
  return (
    <Button
      title={title}
      onPress={() => {
        navigation.navigate(toNavigate);
        navigation.closeDrawer();
      }}
      containerStyle={drawerContentStyles.singleContainer}
      buttonStyle={drawerContentStyles.singleButton}
      icon={icon(25)}
      titleStyle={drawerContentStyles.singleTitle}
    />
  );
};

export default DrawerSingleButton;
