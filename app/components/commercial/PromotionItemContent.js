import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {promotionItemContentStyles} from '../../styles/components';

const PromotionItemContent = ({
  imagePromotion,
  typeImagePromotion,
  navigation,
  legal,
  id,
  type,
}) => {
  const dimensions = {height: 110, width: 0};
  if (typeImagePromotion === 'small') {
    dimensions.width = 110;
  } else if (typeImagePromotion === 'medium') {
    dimensions.width = 168;
  } else {
    dimensions.width = 341;
  }
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('PromotionViewScreen', {
          state: {
            imagePromotion,
            dimensions,
            id,
            type,
            legal,
          },
        });
      }}
      disabled={type === 'v-asistidas'}
      style={promotionItemContentStyles.container}>
      <Image
        style={{
          width: dimensions.width,
          height: dimensions.height,
        }}
        source={{uri: imagePromotion}}
      />
    </TouchableOpacity>
  );
};

export default PromotionItemContent;
