import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import helmet from 'helmet'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: console,
  })

  app.enableCors()

  const config = new DocumentBuilder()
    .setTitle('Freely Fit Trainer')
    .setDescription('Freely Fit Trainer API')
    .setVersion('1.0')
    .addTag('exercise')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  app.use(helmet())
  await app.listen(3000)
}
bootstrap()
