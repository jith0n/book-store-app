import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform (items: any[], field:string, value : string):any[]{
    if (!items || !value)
    return items;
    return items.filter(it => it[field].toLowerCase()== value.toLocaleLowerCase());
    //return items.filter(it => it[field].toLowerCase()== value.toLocaleLowerCase());
  }

}
