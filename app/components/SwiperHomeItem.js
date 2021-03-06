import React from 'react';
import {View, Text, Image} from 'react-native';
import {Button} from 'react-native-elements';
import {swiperHomeStyles} from '../styles';
import {withNavigation} from 'react-navigation';

const SwiperItem = (props) => {
  const {
    title,
    subTitle,
    titleButton,
    imageName,
    colorButton,
    actionButton,
    navigation,
  } = props;
  return (
    <View>
      <Image source={imageName} style={swiperHomeStyles.image} />
      <View style={swiperHomeStyles.container}>
        <Text style={swiperHomeStyles.title}>{title}</Text>
        <Text style={swiperHomeStyles.subTitle}>{subTitle}</Text>
        <Button
          title={titleButton}
          onPress={() => {
            navigation.navigate(actionButton);
          }}
          titleStyle={swiperHomeStyles.textButton}
          containerStyle={swiperHomeStyles.containerButton}
          buttonStyle={[
            swiperHomeStyles.button,
            {backgroundColor: colorButton},
          ]}
        />
      </View>
    </View>
  );
};

export default withNavigation(SwiperItem);
