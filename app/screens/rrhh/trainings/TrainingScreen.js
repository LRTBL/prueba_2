import React from 'react';
import {View, Text, ScrollView, ActivityIndicator} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {List} from 'react-native-paper';
import {NotFoundData} from '../../../components';
import {Colors, containerGeneral} from '../../../styles';
import {trainingStyles} from '../../../styles/screens';
import {withNavigation} from 'react-navigation';
import {getTrainings} from '../../../api/rrhh.api';
import {dateFormatRrhh, hourFormatRrhh} from '../../../utils/formatDate';
import {useQuery} from 'react-query';

const TrainingScreen = ({navigation}) => {
  const {isLoading, data} = useQuery(
    'trainings',
    async () => await getTrainings(),
  );
  return (
    <>
      {isLoading ? (
        <View style={containerGeneral.indicator}>
          <ActivityIndicator color={Colors.PRIMARY_DARK} size={50} />
        </View>
      ) : (
        <>
          {Object.keys(data.data).length !== 0 ? (
            <ScrollView>
              <View style={containerGeneral.margin}>
                {Object.keys(data.data).map((item, key) => {
                  return (
                    <List.Section style={trainingStyles.listSection} key={key}>
                      <List.Accordion
                        theme={{colors: {primary: Colors.PRIMARY}}}
                        style={trainingStyles.listAcordion}
                        titleStyle={trainingStyles.titleListAcordion}
                        title={item}>
                        {data.data[item].map(({date, trainings}, index) => {
                          const {
                            rangeDate,
                            numberDate,
                            labelDate,
                          } = dateFormatRrhh(new Date(date));
                          return (
                            <View
                              key={index}
                              style={trainingStyles.trainingItem}>
                              <View style={trainingStyles.trainingDate}>
                                <Text style={trainingStyles.textTrainingDate}>
                                  {numberDate}
                                </Text>
                                <Text style={trainingStyles.textTrainingDate}>
                                  {labelDate}
                                </Text>
                              </View>
                              <View style={trainingStyles.contentContainer}>
                                <Text style={trainingStyles.textRange}>
                                  {rangeDate}
                                </Text>
                                {trainings.map((content, subIndex) => {
                                  const {title, duracion} = content;
                                  return (
                                    <TouchableOpacity
                                      key={subIndex}
                                      style={trainingStyles.itemContainer}
                                      onPress={() => {
                                        navigation.navigate(
                                          'TrainingViewScreen',
                                          {
                                            state: {...content},
                                          },
                                        );
                                      }}>
                                      <Text style={trainingStyles.itemTitle}>
                                        {title}
                                      </Text>
                                      <Text style={trainingStyles.itemHour}>
                                        {hourFormatRrhh(duracion)}
                                      </Text>
                                    </TouchableOpacity>
                                  );
                                })}
                              </View>
                            </View>
                          );
                        })}
                      </List.Accordion>
                    </List.Section>
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

export default withNavigation(TrainingScreen);
