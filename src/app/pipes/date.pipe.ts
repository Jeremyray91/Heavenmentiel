import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFr'
})
export class DatePipe implements PipeTransform {

  transform(date: any): any {
    let d = new Date(date);
    let options = { weekday: 'short', day: 'numeric' };
    let dateString = d.toLocaleDateString('fr-FR', options);
    return dateString;
  }
}
