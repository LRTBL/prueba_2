import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Header, Left, Right, Body, Title, Button} from 'native-base';
import {Icon, Badge} from 'react-native-elements';
import {headerStyles, Colors} from '../styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft, faUser} from '@fortawesome/free-solid-svg-icons';
import AppContext from '../AppContext';

const HomeScreen = ({navigation, title, type = 'main'}) => {
  const {
    app: {notifications},
  } = React.useContext(AppContext);
  return (
    <Header style={headerStyles.header} androidStatusBarColor={Colors.PRIMARY}>
      <Left style={headerStyles.containerLeft}>
        {type === 'main' ? (
          <Button
            transparent
            onPress={() => {
              navigation.openDrawer();
            }}>
            <Icon type="ionicon" size={32} name="menu" color={Colors.PRIMARY} />
          </Button>
        ) : (
          <Button
            transparent
            onPress={() => {
              navigation.goBack();
            }}>
            <FontAwesomeIcon icon={faChevronLeft} size={20} color="#000" />
          </Button>
        )}
      </Left>
      <Body style={headerStyles.body}>
        <Title style={headerStyles.title}>{title}</Title>
      </Body>
      <Right style={headerStyles.containerRight}>
        {!navigation.state.routeName.includes('Profile') && (
          <TouchableOpacity
            style={headerStyles.profileBtn}
            onPress={() => {
              navigation.navigate('ProfileScreen');
            }}>
            <FontAwesomeIcon icon={faUser} size={22} color={Colors.PRIMARY} />
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('NotificationScreen');
          }}>
          <Icon
            type="ionicon"
            size={22}
            name="notifications"
            color={Colors.PRIMARY}
          />
          {notifications.length !== 0 && (
            <Badge
              status="error"
              value={notifications.length}
              containerStyle={headerStyles.badge}
            />
          )}
        </TouchableOpacity>
      </Right>
    </Header>
  );
};

export default HomeScreen;
