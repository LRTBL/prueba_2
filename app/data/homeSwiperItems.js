import {Colors} from '../styles';

const homeSwiper = [
  // {
  //   title: 'MANTENTE ACTUALIZADO',
  //   subTitle: 'Conoce nuestras noticias',
  //   textButton: 'IR A NOTICIAS',
  //   imageName: require('../resources/images/homeNoticias.png'),
  //   colorButton: Colors.SECONDARY,
  //   actionButton: 'News',
  // },
  {
    title: 'Conoce nuestras ofertas',
    subTitle: 'Compártelas con nuestros clientes',
    textButton: 'IR A PROMOCIONES',
    imageName: require('../resources/images/home/promotionHome.png'),
    colorButton: Colors.YELLOW,
    actionButton: 'PromotionScreen',
  },
  {
    title: 'CAPACITATIONES, ASISTENCIA Y MÁS',
    subTitle: '#CrecemosJuntos',
    textButton: 'IR A RECURSOS HUMANOS',
    imageName: require('../resources/images/home/rrhhHome.png'),
    colorButton: Colors.PRIMARY,
    actionButton: 'HumanResources',
  },
  {
    title: 'SALUD Y SEGURIDAD EN EL TRABAJO',
    subTitle: 'Conoce más',
    textButton: 'IR A SST',
    imageName: require('../resources/images/home/sstHome.png'),
    colorButton: Colors.BLUE,
    actionButton: 'SecurityAndHealth',
  },
  {
    title: 'SIGAMOS CRECIENDO JUNTOS',
    subTitle: 'Recuerda y comparte',
    textButton: 'IR A MEJORA CONTINUA',
    imageName: require('../resources/images/home/improvementHome.png'),
    colorButton: Colors.GREEN,
    actionButton: 'ContinuousImprovement',
  },
];

export default homeSwiper;
