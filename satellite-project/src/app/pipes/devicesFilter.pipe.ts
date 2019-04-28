import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDevices',
  pure: false
})
export class FilterDevicesPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    console.log(value[0].name)
    console.log(filterString)
    console.log(propName)
    console.log(value.length)

    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    for( const item of value) {

      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
