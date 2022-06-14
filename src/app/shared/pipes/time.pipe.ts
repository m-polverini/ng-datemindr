import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'time',
})
export class TimePipe implements PipeTransform {
  transform(value: moment.Moment): string {
    console.log(value);
    return moment(value).fromNow();
  }
}
