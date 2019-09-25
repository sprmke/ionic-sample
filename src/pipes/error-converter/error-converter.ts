import { Pipe, PipeTransform } from '@angular/core';
import { ERROR_MESSAGES } from '../../app/app.constants';

@Pipe({
  name: 'errorConverter',
})
export class ErrorConverterPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return ERROR_MESSAGES[value] ? ERROR_MESSAGES[value] : ERROR_MESSAGES['DEFAULT'];
  }
}
