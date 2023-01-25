import { filteredByDate } from './filteredByDate';
import { filteredByTag } from './filteredByTag';

import { convertDateStringFromInput } from './formatDate';

/* 
const formattedDay = today.toLocaleString('de', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});
*/

export const eventFilter = (events, filter) => {
  console.log('FIRST EVENT DATE : ', events[0]?.date[0]);
  console.log('FIRST EVENT NAME : ', events[0]?.name);
  console.log('FILTER DATE : ', convertDateStringFromInput(filter.date));
};
