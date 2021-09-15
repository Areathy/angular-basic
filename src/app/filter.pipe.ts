import { Pipe, PipeTransform } from '@angular/core';
import { SearchByType, ProjectObjectType } from './admin/projects/types';


@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(value: ProjectObjectType[], searchBy: SearchByType, searchText: string): any {
    if (value == null)
    {
      return value;
    }
    let resultArray = [];
    for (let item of value)
    {
      if (String(item[searchBy]).toLowerCase().indexOf(searchText.toLowerCase()) >= 0)
      {
        resultArray.push(item);
      }
    }

    return resultArray;
  }
}
