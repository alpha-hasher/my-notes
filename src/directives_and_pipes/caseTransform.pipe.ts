import { Pipe, PipeTransform } from "@angular/core";

// pure pipes do not listen for changes in your data
@Pipe({
  name: 'toCase',
  pure: true    // by default the pipes are pure, impure pipes can cause performance issues
})
export class CaseTransformPipe implements PipeTransform{
  transform (value: string, casing: string):string {
    if (casing.toLowerCase() === 'upper') {
      return value.toUpperCase();
    }
    else if (casing.toLowerCase() === 'lower' ) {
      return value.toLowerCase();
    }
    else {
      return value;
    }
  }
}
