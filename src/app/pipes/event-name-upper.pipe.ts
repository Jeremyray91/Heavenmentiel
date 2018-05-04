import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eventNameUpper'
})
export class EventNameUpperPipe implements PipeTransform {

  transform(name: string): string {
    return name.toUpperCase();
  }

}
