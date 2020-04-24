import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'searchfilter'
})

@Injectable()
export class SearchFilterPipe implements PipeTransform {

    transform(items: any[], field: string, expectValue: string): any[] {

        const getNestedObject = (nestedObj, masterKey) => {
         const keys = masterKey.split('.');
         return keys.reduce((obj, key) =>
         (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
        };


        if (!items){ return []; };
        if (!expectValue){ return items; }
        return items.filter(function(item) {

            const value = getNestedObject(item, field).toString();
            return value.startsWith(expectValue);
        });
    }
}
