import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {withNavigation} from 'react-navigation';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

import {dateFormatHours} from '../../utils/formatDate';
import {itemNewStyles} from '../../styles/components';

const ListItemNews = ({title, content, hour, navigation, images, titleTab}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('NewsContentViewScreen', {
          news: {title, content, hour, images},
        });
      }}
      style={itemNewStyles.container}>
      <View>
        <Text style={itemNewStyles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={itemNewStyles.content} numberOfLines={1}>
          {content}
        </Text>
      </View>
      <Text style={itemNewStyles.hour}>{dateFormatHours(hour)}</Text>
      <View style={itemNewStyles.icon}>
        <FontAwesomeIcon icon={faChevronRight} size={20} color="#000" />
      </View>
    </TouchableOpacity>
  );
};

export default withNavigation(ListItemNews);
