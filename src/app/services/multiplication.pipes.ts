import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'multiply'
})

export class MultiplyPipe implements PipeTransform {
    transform(value: any, sub?: any) {
        let res = value * 2;
        if(sub) {
            return res + sub;
        } else {
            return res;
        }
    }
}