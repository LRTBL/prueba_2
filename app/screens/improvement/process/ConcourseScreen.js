import React from 'react';
import {View, ScrollView, ActivityIndicator} from 'react-native';
import {containerGeneral, Colors} from '../../../styles';
import {ConcourseItem, NotFoundData} from '../../../components';
import {withNavigation} from 'react-navigation';
import {getConcourse} from '../../../api/improvement.api';
import {useQuery} from 'react-query';

const ConcourseScreen = ({navigation}) => {
  const {isLoading, data} = useQuery(
    'concourse',
    async () => await getConcourse(),
  );
  return (
    <>
      {isLoading ? (
        <View style={containerGeneral.indicator}>
          <ActivityIndicator color={Colors.YELLOW} size={50} />
        </View>
      ) : (
        <>
          {data.events.length !== 0 ? (
            <ScrollView>
              <View
                style={[containerGeneral.container, containerGeneral.margin]}>
                {data.events.map(({estado, image, id}, key) => (
                  <ConcourseItem
                    key={key}
                    image={image}
                    state={estado}
                    type="improvement"
                    color={'rgba(0,199,53,0.93)'}
                    viewColor={Colors.GREEN}
                    titleColor={Colors.GREEN}
                    navigation={navigation}
                    id={id}
                  />
                ))}
              </View>
            </ScrollView>
          ) : (
            <NotFoundData color={Colors.GREEN} />
          )}
        </>
      )}
    </>
  );
};

export default withNavigation(ConcourseScreen);
