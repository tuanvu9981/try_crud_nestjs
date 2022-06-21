import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, ObjectId } from 'mongoose';
import { SubjectDocument } from 'src/entities/subject.entity';
import { DepartmentDto } from '../dto/department.dto';
import { Department, DepartmentDocument } from '../entities/department.entity';
import { IBaseService } from './ibase.service';

@Injectable()
export class DepartmentService implements IBaseService {
  constructor(
    @InjectModel('department')
    private departmentModel: Model<DepartmentDocument>,

    @InjectModel('subject') // OMIT --> IMMEDIATELY WRONG
    private subjectModel: Model<SubjectDocument>,
  ) {}

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

  async update(
    id: string,
    departmentDto: DepartmentDto,
  ): Promise<DepartmentDocument> {
    const object_id = new mongoose.Types.ObjectId(id);
    return await this.departmentModel.findByIdAndUpdate(
      object_id,
      departmentDto,
      { new: true },
    );
  }

  async remove(id: string): Promise<DepartmentDocument> {
    const object_id = new mongoose.Types.ObjectId(id);
    return await this.departmentModel.findByIdAndDelete(object_id);
  }

  async updateListSubject(
    departmentId: string,
    subjectId: any,
  ): Promise<DepartmentDocument> {
    // console.log(`departmentId: ${departmentId}`);
    // console.log(`subjectId: ${subjectId}`);
    const dpmObjectId = new mongoose.Types.ObjectId(departmentId);
    const sbjObjectId = new mongoose.Types.ObjectId(subjectId);

    const oldDepartment = await this.departmentModel
      .findById(dpmObjectId)
      .exec();
    const newDepartment = new DepartmentDto(oldDepartment);
    newDepartment.subjects.push(sbjObjectId);

    // console.log(newDepartment);

    // const newDepartment = { ...oldDepartment, subjects: [...oldDepartment.subjects, sbjObjectId] };
    // console.log("🚀 ~ file: department.service.ts ~ line 51 ~ DepartmentService ~ updateListSubject ~ newDepartment", newDepartment)
    return await this.departmentModel.findByIdAndUpdate(
      dpmObjectId,
      newDepartment,
      { new: true },
    );
  }

  async getAllSubjectsInDepartment(id: string): Promise<SubjectDocument[]> {
    const subjectList:SubjectDocument[] = [];
    // const departmentObjId = new mongoose.Types.ObjectId(id);
    const department = await this.departmentModel.findById(id).exec();

    for (const element of department.subjects) {
      const subject = await this.subjectModel.findById(element).exec();
      subjectList.push(subject);
    }
    return subjectList;
  }
}
