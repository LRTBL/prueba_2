import React from 'react';
import {View, ScrollView, ActivityIndicator} from 'react-native';
import {ImageWithText, NotFoundData} from '../../../components';
import {Colors, containerGeneral} from '../../../styles';
import {getProcess} from '../../../api/improvement.api';
import {useQuery} from 'react-query';

const DiagramScreen = () => {
  const {isLoading, data} = useQuery('process', async () => await getProcess());
  return (
    <>
      {isLoading ? (
        <View style={containerGeneral.indicator}>
          <ActivityIndicator color={Colors.GREEN} size={50} />
        </View>
      ) : (
        <>
          {data.process.length !== 0 ? (
            <ScrollView>
              <View style={containerGeneral.margin}>
                {data.process.map(({image, title, subtitle, pdf}, key) => (
                  <ImageWithText
                    key={key}
                    pdf={pdf}
                    image={image}
                    title={title}
                    contenido={subtitle}
                    color="rgba(0,199,53,0.93)"
                    toNavigate="DiagramViewScreen"
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

export default DiagramScreen;
