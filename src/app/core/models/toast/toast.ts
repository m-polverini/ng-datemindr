import * as moment from 'moment';
import { TypeToast } from './type-toast';

export interface Toast {
  message: string;
  date: moment.Moment;
  time?: string;
  type: TypeToast;
}
