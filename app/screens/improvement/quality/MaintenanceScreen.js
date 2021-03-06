import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {swiperStyles} from '../../../styles';
import qualityContent from '../../../data/qualityContent';
import {guidesStyles} from '../../../styles/screens';
import Swiper from 'react-native-swiper';

const GuidesScreen = () => {
  const {qualityProducts, qualityTips} = qualityContent.maintance;
  return (
    <ScrollView>
      <View style={guidesStyles.container}>
        <Swiper
          autoplay={true}
          autoplayTimeout={5}
          activeDotStyle={swiperStyles.activeDotSwiper}
          dotStyle={swiperStyles.inactiveDotSwiper}
          containerStyle={swiperStyles.containerSwiper}
          showsButtons={false}>
          {qualityTips.map((qualityTip, key) => {
            return (
              <View key={key} style={guidesStyles.firstSwiperContainer}>
                <Image
                  source={{uri: qualityTip}}
                  style={guidesStyles.firstImages}
                />
              </View>
            );
          })}
        </Swiper>
      </View>
      <View style={guidesStyles.containerText}>
        <Text style={guidesStyles.firstText}>PRODUCTOS INDISPENSABLES</Text>
        <Text style={guidesStyles.secondText}>para una buena limpieza</Text>
        <Text style={guidesStyles.subText}>
          Recuerda presentarlo a los clientes
        </Text>
      </View>
      <View style={guidesStyles.secondSwiperContainer}>
        <Swiper
          autoplay={true}
          autoplayTimeout={5}
          showsPagination={false}
          nextButton={<Text style={guidesStyles.btnSwiper}>›</Text>}
          prevButton={<Text style={guidesStyles.btnSwiper}>‹</Text>}
          showsButtons={true}>
          {qualityProducts.map(({image, title}, key) => {
            return (
              <View key={key} style={guidesStyles.secondImagesContainer}>
                <Image
                  source={{uri: image}}
                  style={guidesStyles.secondImages}
                />
                <Text style={guidesStyles.title}>{title}</Text>
              </View>
            );
          })}
        </Swiper>
      </View>
    </ScrollView>
  );
};

export default GuidesScreen;
