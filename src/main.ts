import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    snapshot: true,
  });

  app.setGlobalPrefix('api/v1');

  const config = new DocumentBuilder()
    .setTitle('TELE-COLLECT REST API')
    .setDescription('TELE-COLLECT API documentation')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    extraModels: [],
  });
  SwaggerModule.setup('api', app, document);

  await app.listen(3001, '0.0.0.0');
}
bootstrap();
