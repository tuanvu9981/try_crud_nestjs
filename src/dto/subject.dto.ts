import { Date } from "mongoose";
import { Department } from "src/entities/department.entity";

export class SubjectDto {
    name: string;
    createdDate?: Date;
    department: Department
}
