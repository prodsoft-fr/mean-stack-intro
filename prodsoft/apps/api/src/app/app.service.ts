import { Injectable, Scope } from '@nestjs/common';
import { Message } from '@prodsoft/api-interfaces';

@Injectable({scope: Scope.DEFAULT })
export class AppService {

  //database
  counter = 11;

  getCounter():number{
    return this.counter;
  }

  setCounter(val: number):number{
     this.counter = val;
     return this.counter;
  }

  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
