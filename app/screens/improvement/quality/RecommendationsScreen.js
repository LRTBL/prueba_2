import React from 'react';
import {withNavigation} from 'react-navigation';
import {View, Text, ScrollView, ActivityIndicator} from 'react-native';
import {pdfGuidesStyles} from '../../../styles/screens';
import {containerGeneral, Colors} from '../../../styles';
import {ItemQuality} from '../../../components/quality';
import {NotFoundData} from '../../../components';
import {getQuality} from '../../../api/improvement.api';
import {useQuery} from 'react-query';

const PdfGuidesScreen = (props) => {
  const {isLoading, data} = useQuery('quality', async () => await getQuality());
  return (
    <>
      {isLoading ? (
        <View style={containerGeneral.indicator}>
          <ActivityIndicator color={Colors.GREEN} size={50} />
        </View>
      ) : (
        <>
          {data.recomends.length !== 0 ? (
            <ScrollView>
              <View style={pdfGuidesStyles.container}>
                <Text style={pdfGuidesStyles.text}>NUEVO</Text>
                {data.recomends.map(({title, mensaje, doc}, key) => {
                  return (
                    <ItemQuality
                      key={key}
                      title={title}
                      description={mensaje}
                      navigation={props.navigation}
                      file={doc}
                    />
                  );
                })}
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

export default withNavigation(PdfGuidesScreen);
