import { Module } from '@nestjs/common';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { RestModule } from './rest/rest.module';

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
    UsersModule,
    RestModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
