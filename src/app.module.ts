import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

@Module({
  imports: [],
  //nest의 router 개념
  //nest g co라고 하면 controller가 생성
  controllers: [MoviesController],
  providers: [],
})
export class AppModule {}
