import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFrMonthEntire'
})
export class DateFrMonthEntirePipe implements PipeTransform {

  transform(date: any): any {
    let d = new Date(date);
    let options = { month:'long' };
    let dateString = d.toLocaleDateString('fr-FR', options).toUpperCase();
    return dateString;
  }

}
