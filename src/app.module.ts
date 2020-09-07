import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { DogsModule } from './dogs/dogs.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  imports: [DogsModule]
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('dogs');
  }
}
