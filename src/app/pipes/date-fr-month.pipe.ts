import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFrMonth'
})
export class DateFrMonthPipe implements PipeTransform {

  transform(date: any): any {
    let d = new Date(date);
    let options = { month:'short' };
    let dateString = d.toLocaleDateString('fr-FR', options).toUpperCase();
    return dateString;
  }

}
