import React from 'react';

import {
  faUserShield,
  faUserFriends,
  faCogs,
  // faEnvelope,
  faHome,
  faBell,
} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Colors} from '../styles';

import PromotionContentScreen from '../screens/commercial/PromotionContentScreen';
import PromotionCorporateView from '../screens/commercial/PromotionCorporateView';

import TrainingScreen from '../screens/rrhh/trainings/TrainingScreen';
import WeAreFootlooseScreen from '../screens/rrhh/weAreFootloose/WeAreFootlooseScreen';
import VoucherScreen from '../screens/rrhh/vouchers/VoucherScreen';
import AttendanceMarkScreen from '../screens/rrhh/mark/AttendanceMarkScreen';

import DiagramScreen from '../screens/improvement/process/DiagramScreen';
import ConcourseScreen from '../screens/improvement/process/ConcourseScreen';

import MaintenanceScreen from '../screens/improvement/quality/MaintenanceScreen';
import RecommendationsScreen from '../screens/improvement/quality/RecommendationsScreen';
import WarrantyScreen from '../screens/improvement/quality/WarrantyScreen';

const optionsMenu = {
  // news: {
  //   type: 'single',
  //   title: 'Ultimas noticias',
  //   color: Colors.SECONDARY,
  //   toNavigate: 'News',
  //   icon: (size)=>(
  //     <FontAwesomeIcon icon={faEnvelope} size={size} color={Colors.SECONDARY} />
  //   ),
  //   tabs: [
  //     {type: 'Commercial', titleTab: 'Comercial'},
  //     {type: 'rrhh', titleTab: 'RRHH'},
  //     {type: 'sst', titleTab: 'SST'},
  //     {type: 'improvement', titleTab: 'Calidad'},
  //   ],
  // },
  home: {
    type: 'single',
    title: 'Inicio',

    toNavigate: 'Home',

    icon: (size) => <FontAwesomeIcon icon={faHome} size={size} color={'red'} />,
  },
  marketing: {
    type: 'accordion',
    title: 'Marketing',
    color: Colors.YELLOW,
    icon: (size) => (
      <FontAwesomeIcon icon={faBell} size={size} color={Colors.YELLOW} />
    ),
    content: {
      information: {
        title: 'Información',
        toNavigate: 'InfoScreen',
      },
      promotion: {
        title: 'Promociones',
        toNavigate: 'PromotionScreen',
        tabs: [
          {
            name: 'Retail',
            children: <PromotionContentScreen type="retail" />,
          },
          {
            name: 'V. Corporativas',
            children: <PromotionCorporateView />,
          },
          {
            name: 'Ecommerce',
            children: <PromotionContentScreen type="ecommerce" />,
          },
          {
            name: 'V. Asistidas',
            children: <PromotionContentScreen type="v-asistidas" />,
          },
        ],
      },
    },
  },
  rrhh: {
    type: 'single',
    title: 'Recursos Humanos',
    toNavigate: 'HumanResources',
    color: Colors.PRIMARY,
    icon: (size) => (
      <FontAwesomeIcon
        icon={faUserFriends}
        size={size}
        color={Colors.PRIMARY}
      />
    ),
    tabs: [
      {name: 'Capacitaciones', children: <TrainingScreen />},
      {name: 'Somos Footloose', children: <WeAreFootlooseScreen />},
      {name: 'Boleta', children: <VoucherScreen />},
      {name: 'Marcación', children: <AttendanceMarkScreen />},
    ],
  },
  sst: {
    type: 'single',
    title: 'SST',
    toNavigate: 'SecurityAndHealth',
    color: Colors.BLUE,
    icon: (size) => (
      <FontAwesomeIcon icon={faUserShield} size={size} color={Colors.BLUE} />
    ),
  },
  improvement: {
    type: 'acordion',
    title: 'Mejora continua',
    color: Colors.GREEN,
    icon: (size) => (
      <FontAwesomeIcon icon={faCogs} size={size} color={Colors.GREEN} />
    ),
    content: {
      quality: {
        title: 'Gestion de calidad',
        toNavigate: 'QualityScreen',
        tabs: [
          {name: 'Mantenimiento', children: <MaintenanceScreen />},
          {name: 'Recomendaciones', children: <RecommendationsScreen />},
          {name: 'Cambios por garantía', children: <WarrantyScreen />},
        ],
      },
      process: {
        title: 'Procesos',
        toNavigate: 'ProcessScreen',
        tabs: [
          {name: 'Diagramas de procesos', children: <DiagramScreen />},
          {name: 'Concursos', children: <ConcourseScreen />},
        ],
      },
      responsability: {
        title: 'Responsabilidad social empresarial',
        toNavigate: 'ResponsabilityScreen',
      },
    },
  },
};

export default optionsMenu;
