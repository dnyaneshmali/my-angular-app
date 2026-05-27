import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'truncate'
})

export class TruncatePipe implements PipeTransform {
    transform(value: any, textLength = 10) {
        return value.slice(0, textLength) + '...';
    }
}