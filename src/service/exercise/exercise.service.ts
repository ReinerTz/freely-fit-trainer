import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Exercise } from 'src/schemas/exercise.schema'

@Injectable()
export class ExerciseService {
  constructor(@InjectModel('exercises') private repository: Model<Exercise>) {}

  public async create(exercise: Exercise): Promise<Exercise> {
    return this.repository.create(exercise)
  }

  public async findAll(): Promise<Exercise[]> {
    return this.repository.find()
  }

  public async getById(id: string): Promise<Exercise | null> {
    return this.repository.findById(id)
  }

  public async update(
    id: string,
    updatedExercise: Exercise,
  ): Promise<Exercise | null> {
    return this.repository.findByIdAndUpdate(id, updatedExercise)
  }

  public async remove(id: string): Promise<Exercise | null> {
    return this.repository.findByIdAndDelete(id)
  }
}
