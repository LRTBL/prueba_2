/* eslint-disable radix */
const monthsNames = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre',
];

const weekDaysNames = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
];

export const dateFormatHours = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let newformat = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  return `${hours}:${minutes} ${newformat}`;
};

export const dateformatComplete = (date, type = false) => {
  const hour = dateFormatHours(date);
  const weekDay = date.getDay();
  const dateNumber = date.getDate();
  const month = date.getMonth();
  if (type) {
    return `${weekDaysNames[weekDay]} ${dateNumber} de ${monthsNames[month]}`;
  }
  return `${weekDaysNames[weekDay]} ${dateNumber} de ${monthsNames[month]} a las ${hour}`;
};

export const dateFormatRrhh = (actualDate) => {
  const response = {
    rangeDate: '',
    numberDate: weekDaysNames[actualDate.getDay()]
      .toUpperCase()
      .substring(0, 3),
    labelDate: actualDate.getDate(),
  };
  const copyDate = new Date(actualDate);
  const mondayWeek = copyDate.setDate(copyDate.getDate() - copyDate.getDay());
  const copyMondayWeek = new Date(mondayWeek);
  const sundayWeek = copyMondayWeek.setDate(copyMondayWeek.getDate() + 6);
  const a = new Date(mondayWeek);
  const b = new Date(sundayWeek);
  if (a.getMonth() === b.getMonth()) {
    response.rangeDate = `${a.getDate()}-${b.getDate()} DE ${monthsNames[
      a.getMonth()
    ]
      .toUpperCase()
      .substring(0, 3)}`;
  } else {
    response.rangeDate = `${a.getDate()} DE ${monthsNames[a.getMonth()]
      .toUpperCase()
      .substring(0, 3)}-${b.getDate()} DE ${monthsNames[b.getMonth()]
      .toUpperCase()
      .substring(0, 3)}`;
  }
  return response;
};

export const hourFormatRrhh = (rangeHour) => {
  const intHour = parseInt(rangeHour.substring(0, 2));
  let sufix = '';
  intHour < 12 ? (sufix = 'a.m.') : (sufix = 'p.m.');
  return `${rangeHour.split(' ')[0]} ${sufix}`;
};
