import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { BaseEntity } from "./base.entity";

export type DepartmentDocument = Department & Document;

@Schema()
export class Department extends BaseEntity{
    @Prop()
    headquater: string;

    @Prop()
    departmentEmail: string;

    @Prop({ type: [{type: mongoose.Types.ObjectId}], default: [] })
    subjects: mongoose.Types.ObjectId[];
}

export const DepartmentSchema = SchemaFactory.createForClass(Department);