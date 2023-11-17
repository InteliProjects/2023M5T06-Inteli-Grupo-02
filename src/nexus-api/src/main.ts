import { NestFactory } from '@nestjs/core';
import { AppModule } from './ioc/app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 8080;
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle(
      'This documentation will describe all the operation of the nexus api controllers.',
    )
    .setVersion('1.0')
    .addTag('analyst')
    .addTag('class')
    .addTag('course')
    .addTag('initiative')
    .addTag('login')
    .addTag('module')
    .addTag('partner')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(port);
  console.log(`aplicação rodando na porta ${port} `);
}
bootstrap();
