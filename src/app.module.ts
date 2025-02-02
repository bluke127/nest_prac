import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  //nest의 router 개념
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
