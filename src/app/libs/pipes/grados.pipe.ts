import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grados'
})
export class GradosPipe implements PipeTransform {

  transform(value: number, ...args: any[]): any {
    console.log(value, args);    
    const SCALE = args[0];

    if(SCALE ==='c'){
      const FARENHEITH_GRADES: number = (value * (9/5) +32);
      return `${FARENHEITH_GRADES}°F`;
    } 
    else if(SCALE === 'f'){
      const CELCIUS_GRADES: number = (value -32)*(9/5);
      return `${CELCIUS_GRADES}°C`;
    }
    
  }



}
