import React from 'react';
import {Tab, Tabs, Container} from 'native-base';
import {containerGeneral, tabNavigationStyles} from '../../styles';
import {HeaderApp} from '../../components';
import optionsMenu from '../../data/optionsMenu';

import NewsContentScreen from './NewsContentScreen';

const NewScreen = (props) => {
  const {tabs} = optionsMenu.news;
  return (
    <Container style={containerGeneral.container}>
      <HeaderApp navigation={props.navigation} title="Noticias" />
      <Tabs
        tabContainerStyle={tabNavigationStyles.tabContainer}
        tabBarUnderlineStyle={tabNavigationStyles.tabBarUnderline}>
        {tabs.map(({type, titleTab}, key) => {
          return (
            <Tab
              key={key}
              tabStyle={tabNavigationStyles.tab}
              activeTabStyle={tabNavigationStyles.tab}
              textStyle={tabNavigationStyles.textTab}
              activeTextStyle={tabNavigationStyles.textTabActiveNews}
              heading={titleTab}>
              <NewsContentScreen titleTab={titleTab} type={type} />
            </Tab>
          );
        })}
      </Tabs>
    </Container>
  );
};

export default NewScreen;
