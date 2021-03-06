import React from 'react';
import {Container, Tab, Tabs} from 'native-base';
import {HeaderApp} from '../../components';
import {containerGeneral} from '../../styles';
import {tabNavigationStyles, Colors} from '../../styles';
import optionsMenu from '../../data/optionsMenu';

const Calidad = (props) => {
  const {tabs} = optionsMenu.improvement.content.quality;
  return (
    <Container style={containerGeneral.container}>
      <HeaderApp navigation={props.navigation} title="Gestión de calidad" />
      <Tabs
        tabContainerStyle={tabNavigationStyles.tabContainer}
        tabBarUnderlineStyle={[
          tabNavigationStyles.tabBarUnderline,
          {backgroundColor: Colors.GREEN},
        ]}>
        {tabs.map(({name, children}, key) => {
          return (
            <Tab
              key={key}
              tabStyle={tabNavigationStyles.tab}
              activeTabStyle={tabNavigationStyles.tab}
              textStyle={tabNavigationStyles.textTab}
              activeTextStyle={tabNavigationStyles.textTabActiveImprovement}
              heading={name}>
              {children}
            </Tab>
          );
        })}
      </Tabs>
    </Container>
  );
};

export default Calidad;
