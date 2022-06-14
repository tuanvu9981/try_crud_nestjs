import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DepartmentDto } from '../dto/department.dto';
import { Department, DepartmentDocument } from '../entities/department.entity';

@Injectable()
export class DepartmentService {

  constructor(
    @InjectModel('department') private departmentModel: Model<DepartmentDocument>
  ) {

  }

  create(departmentDto: DepartmentDto): Promise<DepartmentDocument> {
    const newDepartment = new this.departmentModel(DepartmentDto);
    return newDepartment.save();
  }

  async findAll(): Promise<DepartmentDocument[]> {
    return await this.departmentModel.find().exec();
  }

  async findOne(id: number): Promise<DepartmentDocument> {
    return await this.departmentModel.findById(id).exec();
  }

  async update(id: number, departmentDto: DepartmentDto): Promise<DepartmentDocument> {
    return await this.departmentModel.findByIdAndUpdate(id, departmentDto, { new: true });
  }

  async remove(id: number): Promise<DepartmentDocument> {
    return await this.departmentModel.findByIdAndDelete(id);
  }
}
