import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatInfo'
})
export class FormatInfoPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): string {
    return 'name: '+ value.name + ', age: ' + value.age + ', address: '+ value.address;
  }

}
