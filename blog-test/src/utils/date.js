import { format } from 'date-fns';

export const humanizeDate = (date) => {
  return format(new Date(date), 'MMMM do, yyyy');
};
