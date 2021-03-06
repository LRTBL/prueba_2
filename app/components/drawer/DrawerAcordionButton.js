import React from 'react';
import {List} from 'react-native-paper';
import ItemDrawerAcordionButton from './ItemDrawerAcordionButton';
import {drawerContentStyles} from '../../styles/components';
import AppContext from '../../AppContext';
import types from '../../reducers/types';

const DrawerAcordionButton = ({navigation, title, icon, content, index}) => {
  const {
    app: {drawerSelected},
    dispatch,
  } = React.useContext(AppContext);
  return (
    <List.Section>
      <List.Accordion
        expanded={drawerSelected === index}
        onPress={() => {
          dispatch({
            type: types.DRAWER_ITEM_PRESS,
            payload: {id: index},
          });
        }}
        theme={{colors: {primary: '#000'}}}
        style={drawerContentStyles.accordion}
        titleStyle={drawerContentStyles.titleAccordion}
        title={title}
        left={() => icon(25)}>
        {Object.values(content).map(({title: title2, toNavigate}, key) => {
          return (
            <ItemDrawerAcordionButton
              key={key}
              navigation={navigation}
              title={title2}
              toNavigate={toNavigate}
            />
          );
        })}
      </List.Accordion>
    </List.Section>
  );
};

export default DrawerAcordionButton;
