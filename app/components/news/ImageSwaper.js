import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {
  SrcOverComposition,
  LinearGradient,
} from 'react-native-image-filter-kit';
import {withNavigation} from 'react-navigation';
import {imageSwaperStyles} from '../../styles/components';

const ImageSwaper = ({content, images, hour, titleTab, navigation}) => {
  const titleNews = `Noticia destacada ${titleTab}`;
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('NewsContentViewScreen', {
          news: {images, hour, content, title: titleNews},
        });
      }}
      style={imageSwaperStyles.container}>
      <SrcOverComposition
        resizeCanvasTo={'dstImage'}
        dstImage={
          <Image
            style={imageSwaperStyles.image}
            source={{
              uri: images[0],
            }}
          />
        }
        srcResizeMode={{width: 1, height: 0.5}}
        srcAnchor={{y: 0}}
        srcImage={
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: '80h'}}
            colors={['#fd0000', 'rgba(0,0,0,0.00)']}
          />
        }
      />
      <View style={imageSwaperStyles.contentContainer}>
        <Text style={imageSwaperStyles.title}>{titleNews}</Text>
        <Text style={imageSwaperStyles.content} numberOfLines={1}>
          {content}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default withNavigation(ImageSwaper);
