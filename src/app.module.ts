import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { ExerciseController } from './controller/exercise/exercise.controller'
import { ExerciseService } from './service/exercise/exercise.service'
import { ExerciseSchema } from './schemas/exercise.schema'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    MongooseModule.forRoot(process.env.MONGO_URL),
    MongooseModule.forFeature([{ name: 'exercises', schema: ExerciseSchema }]),
  ],
  controllers: [AppController, ExerciseController],
  providers: [AppService, ExerciseService],
})
export class AppModule {}
