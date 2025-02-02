import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
//url를 가져오고 그 url에 function을 내 놓는 서비스
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/hello')
  sayHello(): string {
    return this.appService.getHi();
  }
}
