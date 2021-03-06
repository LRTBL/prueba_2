import React from 'react';
import {Container, Tab, Tabs} from 'native-base';
import {containerGeneral} from '../../styles';
import {tabNavigationStyles, Colors} from '../../styles';
import {HeaderApp} from '../../components';
import optionsMenu from '../../data/optionsMenu';

const Procesos = (props) => {
  const {tabs} = optionsMenu.improvement.content.process;
  return (
    <Container style={containerGeneral.container}>
      <HeaderApp navigation={props.navigation} title="Procesos" />
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

export default Procesos;
