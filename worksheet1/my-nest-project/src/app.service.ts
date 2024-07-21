import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    let output:string = 'counting numbers'
    for (let index = 0; index < 10; index++) {
      output += "</br>"+ index;
      
    }
    
    return output;
  }
}