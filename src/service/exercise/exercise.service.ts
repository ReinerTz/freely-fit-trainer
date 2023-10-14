import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Exercises } from 'src/schemas/exercises.schema'

@Injectable()
export class ExerciseService {
  constructor(@InjectModel('exercises') private repository: Model<Exercises>) {}

  public async create(exercise: Exercises): Promise<Exercises> {
    return this.repository.create(exercise)
  }

  public async findAll(): Promise<Exercises[]> {
    return this.repository.find()
  }

  public async getById(id: string): Promise<Exercises | null> {
    return this.repository.findById(id)
  }

  public async update(
    id: string,
    updatedExercise: Exercises,
  ): Promise<Exercises | null> {
    return this.repository.findByIdAndUpdate(id, updatedExercise)
  }

  public async remove(id: string): Promise<Exercises | null> {
    return this.repository.findByIdAndDelete(id)
  }
}
