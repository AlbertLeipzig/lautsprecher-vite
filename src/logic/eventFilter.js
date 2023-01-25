import { filteredByDate } from './filteredByDate';
import { filteredByTag } from './filteredByTag';

/* 
const formattedDay = today.toLocaleString('de', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});
*/

export const eventFilter = (events, filter) => {
  events && console.log(events);
  filter && console.log(filter);
};
