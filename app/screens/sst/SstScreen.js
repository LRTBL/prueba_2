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
import {sstStyles} from '../../styles/screens';
import {getAdvisers} from '../../api/sst.api';
import {useQuery} from 'react-query';

const SecurityScreen = (props) => {
  const {isLoading, data} = useQuery('sst', async () => await getAdvisers());
  return (
    <View style={containerGeneral.container}>
      <HeaderApp navigation={props.navigation} title="SST" />
      {isLoading ? (
        <View style={containerGeneral.indicator}>
          <ActivityIndicator color={Colors.BLUE} size={50} />
        </View>
      ) : (
        <>
          {data.advicers.length !== 0 ? (
            <ScrollView>
              <View style={sstStyles.container}>
                {data.advicers.map(({image, title}, key) => {
                  return (
                    <TouchableOpacity
                      key={key}
                      style={sstStyles.imageItem}
                      onPress={() => {
                        props.navigation.navigate('SstBannerViewScreen', {
                          state: {image, title},
                        });
                      }}>
                      <Image source={{uri: image}} style={sstStyles.image} />
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>
          ) : (
            <NotFoundData color={Colors.BLUE} />
          )}
        </>
      )}
    </View>
  );
};

export default SecurityScreen;
