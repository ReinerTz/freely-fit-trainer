import { Prop, Schema } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'

@Schema({ timestamps: true, versionKey: false })
export class BaseSchema {
  @Prop({ required: true })
  id: string

  @Prop()
  updatedAt: Date

  @Prop()
  createdAt: Date
}

export function generateId<TClass = any>(
  c: mongoose.Schema<TClass>,
  prefix: string,
) {
  c.pre('save', function (next) {
    if (this._id) {
      this.id = `${prefix}_${this._id.toString()}`
    }
    next()
  })
}
