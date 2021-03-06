import React from 'react';
import {View, Text, ActivityIndicator, ScrollView} from 'react-native';
import {promotionStyles} from '../../styles/screens';
import {Colors} from '../../styles';
import PromotionItemContent from './PromotionItemContent';
import {useQuery} from 'react-query';
import {NotFoundData} from '../../components';
import {getPromotions} from '../../api/marketing.api';

const PromotionContent = ({navigation, type, subType}) => {
  const {isLoading, data} = useQuery(
    ['promotions', type, subType],
    async () => await getPromotions(type, subType),
  );
  return (
    <>
      {isLoading ? (
        <View style={promotionStyles.activity}>
          <ActivityIndicator color={Colors.YELLOW} size={50} />
        </View>
      ) : (
        <>
          {Object.keys(data).length !== 0 ? (
            <ScrollView>
              <View style={promotionStyles.contentContainer}>
                {Object.keys(data).map((item, key) => {
                  const {promotions} = data[item];
                  return (
                    <View key={key} style={promotionStyles.contentMargin}>
                      <Text style={promotionStyles.title}>{item}</Text>
                      <View style={promotionStyles.flatList}>
                        {promotions.map((promotion, subKey) => (
                          <PromotionItemContent
                            key={subKey}
                            type={type}
                            navigation={navigation}
                            {...promotion}
                          />
                        ))}
                      </View>
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          ) : (
            <View style={promotionStyles.activity}>
              <NotFoundData color={Colors.YELLOW} />
            </View>
          )}
        </>
      )}
    </>
  );
};

export default PromotionContent;
