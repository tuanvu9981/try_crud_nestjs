import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Date } from "mongoose";
import { Department } from "./department.entity";
import { Document } from "mongoose";

export type SubjectDocument = Subject & Document;

@Schema()
export class Subject {
    @Prop({required: true}) //property of this Schema
    name: string;

    @Prop({type: mongoose.Schema.Types.Date, default: Date.now() })
    createdDate: Date;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Department'})
    department: Department;
}

export const SubjectSchema = SchemaFactory.createForClass(Subject);