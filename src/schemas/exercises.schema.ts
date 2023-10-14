import { Prop, SchemaFactory } from '@nestjs/mongoose'
import { EMuscleGroup } from 'src/enums/muscleGroup.enum'
import { BaseSchema, generateId } from './base.schema'

export class Exercises extends BaseSchema {
  @Prop({ type: String, required: true })
  name: string

  @Prop({ type: [String], required: true, enum: Object.values(EMuscleGroup) })
  muscleGroup: EMuscleGroup[]

  @Prop({ type: [String], required: false })
  tips: string[]

  @Prop({ type: [String], required: false })
  file: string
}

export const ExerciseSchema = generateId(
  SchemaFactory.createForClass(Exercises),
  'exer',
)
