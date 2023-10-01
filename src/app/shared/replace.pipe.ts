import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'replace'
})
export class Replace implements PipeTransform {

  transform(value: string, character: string): string {
    return value.replaceAll(character, '-');
  }
}
