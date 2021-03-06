export const toNavigateByType = (type) => {
  switch (type) {
    case 'marketing/info':
      return 'InfoScreen';
    case 'marketing/promotion':
      return 'PromotionScreen';
    case 'rrhh':
      return 'HumanResources';
    case 'sst':
      return 'SecurityAndHealth';
    case 'improvement/quality':
      return 'QualityScreen';
    case 'improvement/process':
      return 'ProcessScreen';
    case 'improvement/responsability':
      return 'ResponsabilityScreen';
    default:
      break;
  }
};
