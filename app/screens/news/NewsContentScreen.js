import React from 'react';
import Swiper from 'react-native-swiper';
import {View, ScrollView} from 'react-native';
import {ListItemNews, ImageSwaper} from '../../components/news';
import {newStyles} from '../../styles';

const data = {
  highlighted: [
    {
      content:
        'Amet aliqua ad culpa commodo dolor fugiat quis laborum. Non eu magna minim deserunt minim occaecat fugiat velit. Esse ani excepteur eiusmod nisi esse sunt sint laboris do. Non dolore ullamco deserunt aliqua ut exercitation consequat sunt est ad sint ea labore magna. Dolor ipsum sunt nostrud aliqua Lorem fugiat commodo veniam ea ullamco consequat. Amet et officia consectetur cillum aute elit nulla voluptate excepteur. Sunt incididunt anim id deserunt occaecat nisi culpa consectetur dolore consequat mollit cillum labore tempor. Mollit quis dolor ipsum sit',
      hour: new Date(),
      images: [
        'https://firebasestorage.googleapis.com/v0/b/lerietbool.appspot.com/o/Screenshot-20210209180852-348x322.png?alt=media&token=52f19a97-3ffc-46fd-8533-1fcd70fd6e32',
      ],
    },
    {
      content:
        'Amet aliqua ad culpa commodo dolor fugiat quis laborum. Non eu magna minim deserunt minim occaecat fugiat velit. Esse ani excepteur eiusmod nisi esse sunt sint laboris do. Non dolore ullamco deserunt aliqua ut exercitation consequat sunt est ad sint ea labore magna. Dolor ipsum sunt nostrud aliqua Lorem fugiat commodo veniam ea ullamco consequat. Amet et officia consectetur cillum aute elit nulla voluptate excepteur. Sunt incididunt anim id deserunt occaecat nisi culpa consectetur dolore consequat mollit cillum labore tempor. Mollit quis dolor ipsum sit',
      hour: new Date(),
      images: [
        'https://firebasestorage.googleapis.com/v0/b/lerietbool.appspot.com/o/Screenshot-20210209180852-348x322.png?alt=media&token=52f19a97-3ffc-46fd-8533-1fcd70fd6e32',
      ],
    },
  ],
  normal: [
    {
      title:
        'Aliqua sunt anim veniam ex est anim elit officia nulla dolore enim incididunt.faChevronRight',
      content:
        'Amet aliqua ad culpa commodo dolor fugiat quis laborum. Non eu magna minim deserunt minim occaecat fugiat velit. Esse ani excepteur eiusmod nisi esse sunt sint laboris do. Non dolore ullamco deserunt aliqua ut exercitation consequat sunt est ad sint ea labore magna. Dolor ipsum sunt nostrud aliqua Lorem fugiat commodo veniam ea ullamco consequat. Amet et officia consectetur cillum aute elit nulla voluptate excepteur. Sunt incididunt anim id deserunt occaecat nisi culpa consectetur dolore consequat mollit cillum labore tempor. Mollit quis dolor ipsum sit',
      hour: new Date(),
      images: [
        'https://firebasestorage.googleapis.com/v0/b/lerietbool.appspot.com/o/Screenshot-20210209180852-348x322.png?alt=media&token=52f19a97-3ffc-46fd-8533-1fcd70fd6e32',
        'https://firebasestorage.googleapis.com/v0/b/lerietbool.appspot.com/o/Screenshot-20210209180852-348x322.png?alt=media&token=52f19a97-3ffc-46fd-8533-1fcd70fd6e32',
      ],
    },
    {
      title:
        'Aliqua sunt anim veniam ex est anim elit officia nulla dolore enim incididunt.faChevronRight',
      content:
        'Amet aliqua ad culpa commodo dolor fugiat quis laborum. Non eu magna minim deserunt minim occaecat fugiat velit. Esse ani excepteur eiusmod nisi esse sunt sint laboris do. Non dolore ullamco deserunt aliqua ut exercitation consequat sunt est ad sint ea labore magna. Dolor ipsum sunt nostrud aliqua Lorem fugiat commodo veniam ea ullamco consequat. Amet et officia consectetur cillum aute elit nulla voluptate excepteur. Sunt incididunt anim id deserunt occaecat nisi culpa consectetur dolore consequat mollit cillum labore tempor. Mollit quis dolor ipsum sit',
      hour: new Date(),
      images: [
        'https://firebasestorage.googleapis.com/v0/b/lerietbool.appspot.com/o/Screenshot-20210209180852-348x322.png?alt=media&token=52f19a97-3ffc-46fd-8533-1fcd70fd6e32',
        'https://firebasestorage.googleapis.com/v0/b/lerietbool.appspot.com/o/Screenshot-20210209180852-348x322.png?alt=media&token=52f19a97-3ffc-46fd-8533-1fcd70fd6e32',
      ],
    },
    {
      title:
        'Aliqua sunt anim veniam ex est anim elit officia nulla dolore enim incididunt.faChevronRight',
      content:
        'Amet aliqua ad culpa commodo dolor fugiat quis laborum. Non eu magna minim deserunt minim occaecat fugiat velit. Esse ani excepteur eiusmod nisi esse sunt sint laboris do. Non dolore ullamco deserunt aliqua ut exercitation consequat sunt est ad sint ea labore magna. Dolor ipsum sunt nostrud aliqua Lorem fugiat commodo veniam ea ullamco consequat. Amet et officia consectetur cillum aute elit nulla voluptate excepteur. Sunt incididunt anim id deserunt occaecat nisi culpa consectetur dolore consequat mollit cillum labore tempor. Mollit quis dolor ipsum sit',
      hour: new Date(),
      images: [
        'https://firebasestorage.googleapis.com/v0/b/lerietbool.appspot.com/o/Screenshot-20210209180852-348x322.png?alt=media&token=52f19a97-3ffc-46fd-8533-1fcd70fd6e32',
        'https://firebasestorage.googleapis.com/v0/b/lerietbool.appspot.com/o/Screenshot-20210209180852-348x322.png?alt=media&token=52f19a97-3ffc-46fd-8533-1fcd70fd6e32',
      ],
    },
    {
      title:
        'Aliqua sunt anim veniam ex est anim elit officia nulla dolore enim incididunt.faChevronRight',
      content:
        'Amet aliqua ad culpa commodo dolor fugiat quis laborum. Non eu magna minim deserunt minim occaecat fugiat velit. Esse ani excepteur eiusmod nisi esse sunt sint laboris do. Non dolore ullamco deserunt aliqua ut exercitation consequat sunt est ad sint ea labore magna. Dolor ipsum sunt nostrud aliqua Lorem fugiat commodo veniam ea ullamco consequat. Amet et officia consectetur cillum aute elit nulla voluptate excepteur. Sunt incididunt anim id deserunt occaecat nisi culpa consectetur dolore consequat mollit cillum labore tempor. Mollit quis dolor ipsum sit',
      hour: new Date(),
      images: [
        'https://firebasestorage.googleapis.com/v0/b/lerietbool.appspot.com/o/Screenshot-20210209180852-348x322.png?alt=media&token=52f19a97-3ffc-46fd-8533-1fcd70fd6e32',
        'https://firebasestorage.googleapis.com/v0/b/lerietbool.appspot.com/o/Screenshot-20210209180852-348x322.png?alt=media&token=52f19a97-3ffc-46fd-8533-1fcd70fd6e32',
      ],
    },
  ],
};

const NewsContentScreen = ({type, titleTab}) => {
  const {highlighted, normal} = data;

  return (
    <View style={newStyles.container}>
      <View style={newStyles.swiperContainer}>
        <Swiper
          autoplay={true}
          autoplayTimeout={5}
          activeDotStyle={newStyles.swiperActiveDot}
          paginationStyle={newStyles.swiperPagination}
          dotStyle={newStyles.swiperInactiveDot}>
          {highlighted.map(({content, hour, images}, key) => {
            return (
              <ImageSwaper
                key={key}
                content={content}
                hour={hour}
                images={images}
                titleTab={titleTab}
              />
            );
          })}
        </Swiper>
      </View>
      <ScrollView style={newStyles.containerItems}>
        {normal.map(({title, content, hour, images}, key) => {
          return (
            <ListItemNews
              key={key}
              title={title}
              content={content}
              hour={hour}
              images={images}
              titleTab={titleTab}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default NewsContentScreen;
