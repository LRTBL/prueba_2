import React from 'react';
import {View, Text, Image} from 'react-native';
import {birthDayItemStyles} from '../../styles/components';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faLaughBeam,
  faMusic,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';

const BirthDayItem = ({
  name,
  employment,
  workplace,
  photo,
  hobbie,
  foot,
  music,
}) => {
  const description = {hobbie, foot, music};
  return (
    <View style={birthDayItemStyles.container}>
      <View style={birthDayItemStyles.cardContainer}>
        <Image source={{uri: photo}} style={birthDayItemStyles.image} />
        <View style={birthDayItemStyles.textContainer}>
          <Text style={birthDayItemStyles.name}>{name}</Text>
          <Text style={birthDayItemStyles.employment}>{employment}</Text>
          <Text style={birthDayItemStyles.workplace}>{workplace}</Text>
          <View style={birthDayItemStyles.separator}>
            {Object.keys(description).map((item, key) => {
              return (
                <View style={birthDayItemStyles.detailsContainer} key={key}>
                  <FontAwesomeIcon
                    icon={
                      item === 'hobbie'
                        ? faLaughBeam
                        : item === 'music'
                        ? faMusic
                        : faUtensils
                    }
                    size={17}
                    color={'white'}
                  />
                  <Text style={birthDayItemStyles.details}>
                    {description[item] !== '' ? description[item] : '-'}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

export default BirthDayItem;
