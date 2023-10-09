import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { ExerciseController } from './controller/exercise/exercise.controller'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    MongooseModule.forRoot(process.env.MONGO_URL),
  ],
  controllers: [AppController, ExerciseController],
  providers: [AppService],
})
export class AppModule {}
