import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'validation'
})
export class ValidationErrorPipe implements PipeTransform {

  allErrors: { [key: string]: string[] } = {
    'empty': [' field must not be empty'],
    'min-length': [' is too small', '(must contain more then ', ' characters long)'],
    'max-length': [' is too large', '(must be less than ', ' characters long)'],
  }

  lengthValid = (value: string, type: string, another?: string) => {
    let tmp = value + this.allErrors[type][0]
    if (another)
      tmp += this.allErrors[type][1] + another + this.allErrors[type][2]
    return tmp
  }

  transform(value: string, type: string, another?: string): string {

    switch (type) {
      case 'empty':
        return value + this.allErrors[type][0]
      case 'min-length' :
        return this.lengthValid(value, type, another)
      case 'max-length' :
        return this.lengthValid(value, type, another)
      default :
        return `Error in ${value}`;
    }
  }

}
