import { Pipe, PipeTransform } from '@angular/core';
import  * as moment from 'moment';
@Pipe({
  name: 'fechas'
})
export class FechasPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
  
    return moment(value, "YYYYMMDD").fromNow();;
  }

}
