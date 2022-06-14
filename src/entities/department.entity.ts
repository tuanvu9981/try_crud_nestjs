import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type DepartmentDocument = Department & Document;

@Schema()
export class Department {
    @Prop()
    departmentName: string;

    @Prop()
    headquater: string;

    @Prop()
    departmentEmail: string;
}

export const DepartmentSchema = SchemaFactory.createForClass(Department);