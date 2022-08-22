import moment from 'moment';

export const DateType = (date = new Date(), format = 'YYYY-MM-DD HH:mm:ss') => moment(date).format(format);