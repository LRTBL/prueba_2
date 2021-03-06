import React from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import {birthDayStyles} from '../../../styles/screens';
import {containerGeneral, Colors} from '../../../styles';
import {BirthDayItem} from '../../../components/rrhh';
import {NotFoundData} from '../../../components';
import {useQuery} from 'react-query';
import {getBirthday} from '../../../api/rrhh.api';

const BirthDayScreen = () => {
  const {isLoading, data} = useQuery(
    'birthdays',
    async () => await getBirthday(),
  );

  return (
    <>
      {isLoading ? (
        <View style={containerGeneral.indicator}>
          <ActivityIndicator color={Colors.PRIMARY_DARK} size={50} />
        </View>
      ) : (
        <>
          {data.birthdays.length !== 0 ? (
            <View style={birthDayStyles.container}>
              <ImageBackground
                style={birthDayStyles.imageBack}
                source={require('../../../resources/images/birthdayBackground.png')}>
                <ScrollView>
                  <Text style={birthDayStyles.title}>¡Feliz Cumple!</Text>
                  {isLoading ? (
                    <View>
                      <Text>Cargando</Text>
                    </View>
                  ) : (
                    <View style={birthDayStyles.content}>
                      {data.birthdays.map(
                        (
                          {
                            NOMBRE,
                            PATERNO,
                            MATERNO,
                            cargo,
                            area,
                            hobbie,
                            comida_favorita,
                            genero_musical,
                            photo,
                          },
                          key,
                        ) => {
                          return (
                            <BirthDayItem
                              key={key}
                              name={`${NOMBRE} ${PATERNO} ${MATERNO}`}
                              employment={cargo}
                              workplace={area}
                              hobbie={hobbie}
                              foot={comida_favorita}
                              music={genero_musical}
                              photo={photo}
                            />
                          );
                        },
                      )}
                    </View>
                  )}
                </ScrollView>
              </ImageBackground>
            </View>
          ) : (
            <NotFoundData color={Colors.PRIMARY_DARK} type="birthday" />
          )}
        </>
      )}
    </>
  );
};

export default BirthDayScreen;
