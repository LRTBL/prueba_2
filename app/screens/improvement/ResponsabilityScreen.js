import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {HeaderApp, NotFoundData} from '../../components';
import {containerGeneral, Colors} from '../../styles';
import {responsabilityStyles, sstStyles} from '../../styles/screens';
import {getResponsability} from '../../api/improvement.api';
import {useQuery} from 'react-query';

const ResponsabilityScreen = (props) => {
  const {isLoading, data} = useQuery(
    'responsability',
    async () => await getResponsability(),
  );
  return (
    <View style={containerGeneral.container}>
      <HeaderApp navigation={props.navigation} title="RSE" />
      {isLoading ? (
        <View style={containerGeneral.indicator}>
          <ActivityIndicator color={Colors.GREEN} size={50} />
        </View>
      ) : (
        <>
          {data.banners.length !== 0 ? (
            <ScrollView>
              <View style={responsabilityStyles.container}>
                {data.banners.map(({title, image, content}, key) => {
                  return (
                    <TouchableOpacity
                      style={sstStyles.imageItem}
                      onPress={() => {
                        props.navigation.navigate('ResponsabilityViewScreen', {
                          state: {title, image, content},
                        });
                      }}
                      key={key}>
                      <Image
                        source={{uri: image}}
                        style={responsabilityStyles.image}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>
          ) : (
            <NotFoundData color={Colors.GREEN} />
          )}
        </>
      )}
    </View>
  );
};

export default ResponsabilityScreen;
