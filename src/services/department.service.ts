import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { DepartmentDto } from '../dto/department.dto';
import { Department, DepartmentDocument } from '../entities/department.entity';

@Injectable()
export class DepartmentService {

  constructor(
    @InjectModel('department') private departmentModel: Model<DepartmentDocument>
  ) {

  }

  create(departmentDto: DepartmentDto): Promise<DepartmentDocument> {
    const newDepartment = new this.departmentModel(departmentDto);
    return newDepartment.save();
  }

  async findAll(): Promise<DepartmentDocument[]> {
    return await this.departmentModel.find().exec();
  }

  async findOne(id: string): Promise<DepartmentDocument> {
    const object_id = new mongoose.Types.ObjectId(id);
    return await this.departmentModel.findById(object_id).exec();
  }

  async update(id: string, departmentDto: DepartmentDto): Promise<DepartmentDocument> {
    const object_id = new mongoose.Types.ObjectId(id);
    return await this.departmentModel.findByIdAndUpdate(object_id, departmentDto, { new: true });
  }

  async remove(id: string): Promise<DepartmentDocument> {
    const object_id = new mongoose.Types.ObjectId(id);
    return await this.departmentModel.findByIdAndDelete(object_id);
  }
}
