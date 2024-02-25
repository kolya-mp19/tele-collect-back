import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DevtoolsModule } from '@nestjs/devtools-integration';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'password',
      database: 'tele-collect',
      entities: [],
      synchronize: true,
    }),
    DevtoolsModule.register({
      // http: process.env.NODE_ENV !== 'production',
      http: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
