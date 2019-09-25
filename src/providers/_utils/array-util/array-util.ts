import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
declare const moment: any;

@Injectable()
export class ArrayUtilProvider {

  constructor(public http: HttpClient) {
  }

  /**
   *
   * @param object
   * Turn your strings into dates, and then subtract them
   * to get a value that is either negative, positive, or zero.
   */

  sortByDateDesc(array: Array<any>, property: any) {
    return new Promise(resolve => resolve(array.sort((a, b) => {
      return moment(b[property]) - moment(a[property]);
    })));

  }

  dynamicSort(property: string, order: string) {
    let sortOrder = 1;
    if (order === 'desc') {
      sortOrder = -1;
    }

    return (a, b) => {
      const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
    };
  }

}
