import mongoose from "mongoose";
import { Department, DepartmentDocument } from "src/entities/department.entity";
import { BaseDto } from "./base.dto";

export class DepartmentDto extends BaseDto {    
    headquater: string;
    departmentEmail: string;
    subjects?: mongoose.Types.ObjectId[];

    constructor(department: DepartmentDocument){
        super(department._id.toString(), department.name);        
        this.headquater = department.headquater;
        this.departmentEmail = department.departmentEmail;
        this.subjects = department.subjects;
    }
}
