import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Date, ObjectId } from 'mongoose';
import { Document } from 'mongoose';
import { BaseEntity } from './base.entity';

export type SubjectDocument = Subject & Document;

@Schema({ versionKey: false })
export class Subject extends BaseEntity {
  @Prop({ type: mongoose.Schema.Types.Date, default: Date.now() })
  createdDate: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Department' })
  departmentId: ObjectId;
}

export const SubjectSchema = SchemaFactory.createForClass(Subject);
