import React from 'react';
import {View} from 'react-native';
import {containerGeneral, swiperStyles} from '../styles';
import {HeaderApp, SwiperHomeItem} from '../components';
import homeSwiperItems from '../data/homeSwiperItems';

import Swiper from 'react-native-swiper';

const HomeScreen = (props) => {
  return (
    <View style={containerGeneral.container}>
      <HeaderApp navigation={props.navigation} title={'Inicio'} />
      <Swiper
        activeDotStyle={swiperStyles.activeDotSwiper}
        dotStyle={swiperStyles.inactiveDotSwiper}
        containerStyle={swiperStyles.containerSwiper}
        showsButtons={false}>
        {homeSwiperItems.map(
          (
            {title, subTitle, textButton, colorButton, imageName, actionButton},
            key,
          ) => {
            return (
              <View key={key}>
                <SwiperHomeItem
                  title={title}
                  subTitle={subTitle}
                  titleButton={textButton}
                  colorButton={colorButton}
                  imageName={imageName}
                  actionButton={actionButton}
                />
              </View>
            );
          },
        )}
      </Swiper>
    </View>
  );
};

export default HomeScreen;
