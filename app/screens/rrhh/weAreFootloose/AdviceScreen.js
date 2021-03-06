import React from 'react';
import {View, ScrollView, ActivityIndicator} from 'react-native';
import {ImageWithText, NotFoundData} from '../../../components';
import {getAdvices} from '../../../api/rrhh.api';
import {useQuery} from 'react-query';
import {Colors, containerGeneral} from '../../../styles';

const AdviceScreen = ({navigation}) => {
  const {isLoading, data} = useQuery(
    'advicers',
    async () => await getAdvices(),
  );
  return (
    <>
      {isLoading ? (
        <View style={containerGeneral.indicator}>
          <ActivityIndicator color={Colors.PRIMARY_DARK} size={50} />
        </View>
      ) : (
        <>
          {data.advicers.length !== 0 ? (
            <ScrollView>
              <View style={containerGeneral.containerTotal}>
                {data.advicers.map(({image, title, contenido, pdf}, key) => {
                  return (
                    <ImageWithText
                      key={key}
                      image={image}
                      title={title}
                      contenido={contenido}
                      pdf={pdf}
                      color="rgba(101,37,112,0.9)"
                      colorTitle={Colors.PRIMARY}
                      colorButton={Colors.SECONDARY}
                      navigation={navigation}
                      toNavigate="AdviceViewScreen"
                    />
                  );
                })}
              </View>
            </ScrollView>
          ) : (
            <NotFoundData color={Colors.PRIMARY_DARK} />
          )}
        </>
      )}
    </>
  );
};

export default AdviceScreen;
