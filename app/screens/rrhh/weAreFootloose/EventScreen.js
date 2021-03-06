import React from 'react';
import {View, ScrollView, ActivityIndicator} from 'react-native';
import {withNavigation} from 'react-navigation';
import {Colors, containerGeneral} from '../../../styles';
import {useQuery} from 'react-query';
import {ConcourseItem, NotFoundData} from '../../../components';
import {getEvents} from '../../../api/rrhh.api';

const EventScreen = ({navigation}) => {
  const {isLoading, data} = useQuery('events', async () => await getEvents());
  return (
    <>
      {isLoading ? (
        <View style={containerGeneral.indicator}>
          <ActivityIndicator color={Colors.PRIMARY_DARK} size={50} />
        </View>
      ) : (
        <>
          {data.events.length === 0 ? (
            <NotFoundData color={Colors.PRIMARY} />
          ) : (
            <ScrollView>
              <View style={containerGeneral.litleMargin}>
                {isLoading ? (
                  <View>
                    <ActivityIndicator size={30} color={Colors.SECONDARY} />
                  </View>
                ) : (
                  <>
                    {data.events.map(({image, estado, id}, key) => {
                      return (
                        <ConcourseItem
                          key={key}
                          image={image}
                          state={estado}
                          type="rrhh"
                          viewColor={Colors.SECONDARY}
                          titleColor={Colors.PRIMARY}
                          color={'rgba(230,0,59,0.93)'}
                          navigation={navigation}
                          id={id}
                        />
                      );
                    })}
                  </>
                )}
              </View>
            </ScrollView>
          )}
        </>
      )}
    </>
  );
};

export default withNavigation(EventScreen);
