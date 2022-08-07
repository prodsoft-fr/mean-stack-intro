import { Body, Controller, Get, Post } from '@nestjs/common';

import { Message } from '@prodsoft/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  /** counter */
  @Get('counter')
  getCountera(): number {
    return this.appService.getCounter();
  }

  @Post('counter')
  setData(@Body() userCounter: any):number {
    //console.log('input value',userCounter);
    return this.appService.setCounter(userCounter.value);
  }
}
