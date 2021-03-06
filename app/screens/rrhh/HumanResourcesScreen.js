import React from 'react';
import {Container, Tab, Tabs} from 'native-base';
import {containerGeneral, tabNavigationStyles, Colors} from '../../styles';
import {HeaderApp} from '../../components';
import optionsMenu from '../../data/optionsMenu';

const HumanResourcesScreen = (props) => {
  const {tabs} = optionsMenu.rrhh;
  return (
    <Container style={containerGeneral.container}>
      <HeaderApp navigation={props.navigation} title="Recursos Humanos" />
      <Tabs
        tabContainerStyle={tabNavigationStyles.tabContainer}
        tabBarUnderlineStyle={[
          tabNavigationStyles.tabBarUnderline,
          {backgroundColor: Colors.PRIMARY},
        ]}>
        {tabs.map(({name, children}, key) => {
          return (
            <Tab
              key={key}
              tabStyle={tabNavigationStyles.tab}
              activeTabStyle={tabNavigationStyles.tab}
              textStyle={tabNavigationStyles.textTabRRHH}
              activeTextStyle={tabNavigationStyles.textTabActiveRRHH}
              heading={name}>
              {children}
            </Tab>
          );
        })}
      </Tabs>
    </Container>
  );
};

export default HumanResourcesScreen;
