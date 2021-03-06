import React from 'react';
import {HeaderApp} from '../../components';
import {containerGeneral, tabNavigationStyles, Colors} from '../../styles';
import {Container, Tab, Tabs} from 'native-base';
import optionsMenu from '../../data/optionsMenu';

const PromotionScreen = (props) => {
  const {tabs} = optionsMenu.marketing.content.promotion;
  return (
    <Container style={containerGeneral.container}>
      <HeaderApp navigation={props.navigation} title="Promociones" />
      <Tabs
        tabContainerStyle={tabNavigationStyles.tabContainer}
        tabBarUnderlineStyle={[
          tabNavigationStyles.tabBarUnderline,
          {backgroundColor: Colors.YELLOW},
        ]}>
        {tabs.map(({name, children}, key) => {
          return (
            <Tab
              key={key}
              tabStyle={tabNavigationStyles.tab}
              activeTabStyle={tabNavigationStyles.tab}
              textStyle={tabNavigationStyles.textTab}
              activeTextStyle={tabNavigationStyles.textTabActiveCommercial}
              heading={name}>
              {children}
            </Tab>
          );
        })}
      </Tabs>
    </Container>
  );
};

export default PromotionScreen;
