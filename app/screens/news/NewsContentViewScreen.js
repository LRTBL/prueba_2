import React from 'react';
import Swiper from 'react-native-swiper';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Share,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faClock, faShare} from '@fortawesome/free-solid-svg-icons';

import {HeaderApp} from '../../components';
import {containerGeneral, Colors, swiperStyles} from '../../styles';
import {newsViewStyles} from '../../styles/screens';
import {dateformatComplete} from '../../utils/formatDate';

const NewsContentViewScreen = ({navigation}) => {
  const {title, content, hour, images} = navigation.getParam('news');
  const handleShare = () => {
    Share.share(
      {
        message:
          '¡Hola! Te comparto esta noticias de la aplicación de Footloose.',
        url:
          'https://play.google.com/store/apps/details?id=com.byraesoftware.ir.catalogotopmodel',
        title: 'Compartir Noticia Destacada RRHH Footloose',
      },
      {
        // Android only:
        dialogTitle: 'Compartir Noticia Footloose',
        // iOS only:
        excludedActivityTypes: ['com.apple.UIKit.activity.PostToTwitter'],
      },
    );
  };
  return (
    <View style={containerGeneral.container}>
      <HeaderApp type="secondary" navigation={navigation} />
      <ScrollView>
        <View style={newsViewStyles.container}>
          <View style={newsViewStyles.containerContent}>
            <Text style={newsViewStyles.title}>{title}</Text>
            <Text style={newsViewStyles.content}>{content}</Text>
          </View>
          <View style={newsViewStyles.hourContainer}>
            <FontAwesomeIcon icon={faClock} size={22} color={Colors.PRIMARY} />
            <Text style={newsViewStyles.hourText}>
              {dateformatComplete(hour)}
            </Text>
          </View>
          <View style={newsViewStyles.containerSwiper}>
            <Swiper
              dotStyle={swiperStyles.inactiveDotSwiper}
              activeDotStyle={swiperStyles.activeDotSwiper}>
              {images.map((image, key) => {
                return (
                  <View key={key} style={newsViewStyles.imageContainer}>
                    <Image
                      style={newsViewStyles.image}
                      source={{
                        uri: image,
                      }}
                    />
                  </View>
                );
              })}
            </Swiper>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={handleShare}
        style={newsViewStyles.shareButton}>
        <FontAwesomeIcon icon={faShare} size={22} color={Colors.WHITE} />
        <Text style={newsViewStyles.textShareButton}>COMPARTIR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewsContentViewScreen;
