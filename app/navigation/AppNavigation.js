import 'react-native-gesture-handler';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {Dimensions} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';

import {
  SplashScreen,
  HomeScreen,
  NotificationScreen,
  PdfViewScreen,
  PdfParticipateScreen,
  ConcourseViewScreen,
} from '../screens';

import {
  LoginScreen,
  LoginCodeConfirmation,
  LoginResetPassword,
} from '../screens/login';

import {NewScreen, NewsContentViewScreen} from '../screens/news';

import {SstScreen, SstBannerViewScreen} from '../screens/sst';

import {
  QualityScreen,
  ProcessScreen,
  ResponsabilityScreen,
  ResponsabilityViewScreen,
  DiagramViewScreen,
} from '../screens/improvement';

import {
  HumanResourcesScreen,
  TrainingViewScreen,
  AdviceViewScreen,
} from '../screens/rrhh';

import {
  StockScreen,
  InfoScreen,
  PromotionScreen,
  PromotionViewScreen,
} from '../screens/commercial';

import {
  ProfileScreen,
  ProfileEditScreen,
  ProfileChangePasswordScreen,
} from '../screens/profile';

import Drawer from './Drawer';

const MyDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    News: {
      screen: createStackNavigator(
        {NewScreen, NewsContentViewScreen},
        {headerMode: 'none'},
      ),
    },
    Commercial: {
      screen: createStackNavigator(
        {
          StockScreen,
          InfoScreen,
          PromotionScreen,
          PromotionViewScreen,
          PdfViewScreen,
        },
        {headerMode: 'none'},
      ),
    },
    HumanResources: {
      screen: createStackNavigator(
        {
          HumanResourcesScreen,
          TrainingViewScreen,
          ConcourseViewScreen,
          AdviceViewScreen,
          PdfViewScreen,
          PdfParticipateScreen,
        },
        {headerMode: 'none'},
      ),
    },
    SecurityAndHealth: {
      screen: createStackNavigator(
        {SstScreen, SstBannerViewScreen},
        {headerMode: 'none'},
      ),
    },
    ContinuousImprovement: {
      screen: createStackNavigator(
        {
          QualityScreen,
          ProcessScreen,
          ResponsabilityScreen,
          ConcourseViewScreen,
          ResponsabilityViewScreen,
          PdfViewScreen,
          PdfParticipateScreen,
          DiagramViewScreen,
        },
        {headerMode: 'none'},
      ),
    },
    User: {
      screen: createStackNavigator(
        {
          ProfileScreen,
          ProfileEditScreen,
          ProfileChangePasswordScreen,
          NotificationScreen,
        },
        {headerMode: 'none'},
      ),
    },
  },
  {
    initialRouteName: 'Home',
    contentComponent: Drawer,
    drawerWidth: Dimensions.get('window').width * 0.79,
  },
);

const AppNavigation = createSwitchNavigator(
  {
    Splash: {
      screen: SplashScreen,
    },
    Auth: createStackNavigator(
      {
        LoginScreen,
        LoginCodeConfirmation,
        LoginResetPassword,
      },
      {headerMode: 'none'},
    ),
    App: {
      screen: MyDrawerNavigator,
    },
  },
  {
    initialRouteName: 'Splash',
  },
);

export default createAppContainer(AppNavigation);
