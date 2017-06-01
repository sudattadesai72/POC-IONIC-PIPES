import {Pipe} from '@angular/core';
 
@Pipe({
  name: 'reverseString'
})
export class ReverseString {
  transform(value, args) {
  if(value != undefined ){
  console.log("in",value);
    let value1 = value.split("").reverse().join("");
    return value1;
   }
   else {
     return value;
   }
  }
}